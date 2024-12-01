import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import expressFileUpload from "express-fileupload";
import YAML from "yamljs";
import '../../Configs/Enviroment'
import { AppError } from "../../ErrorHandler/AppError";
import { PORT } from "../../Configs/Enviroment/EnviromentVariables";
import { rabbitMq } from "../../Queue";
import { apiRoutes } from "../../Routes";
import cookieParser from "cookie-parser";

class HttpServer {
  app: express.Express;
  private corsOrgins = ["http://localhost:5173", "http://localhost:4220"];

  constructor() {
    this.app = express();
    this.middlewares();
    this.defaultHeaders();
    this.routes();
    this.queues();
    this.errorHandler();
    this.swaggerInit();

    console.log("Connected to Http Server");
  }

  swaggerInit() {
    const swaggerDocument = YAML.load(
      `${path.resolve()}/src/Configs/swagger.yaml`
    );
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  listen() {
    this.app.listen(PORT, () => console.log(`Listening to ${PORT}`));
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cookieParser())
    this.app.use(expressFileUpload());
    this.app.use(morgan("dev"));
    this.app.use(
      cors({
        origin: this.corsOrgins,
        credentials: true,
      })
    );
  }

  routes() {
    this.app.use("/car_api", apiRoutes);
  }

  async queues() {
    try {
      await rabbitMq.connect();
      await rabbitMq.subscribeToQueues();
    } catch (error) {
      console.log("RABBIT MQ ERROR", error);
    }
  }

  errorHandler() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
          return res.status(err.statusCode).json({ message: err.message });
        } else {
          return res
            .status(500)
            .json({ message: `Internal Server Error ${err.message}` });
        }
      }
    );
  }

  defaultHeaders() {
    this.app.use((req, res, next) => {
      const origin = this.corsOrgins.includes(req.header("origin"))
        ? req.headers.origin
        : null;
      // if (!origin) {
      //   throw new AppError("Unauthrized", 403);
      // }
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH"
      );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    });
  }
}

export default new HttpServer();
