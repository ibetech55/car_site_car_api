
import { Request, Response } from "express";
import cookie from 'cookie';
import { CreateCarUseCase } from "../../../Presentation/CarUseCases/CreateCarUseCase";
import { ITokenData, getUserData } from "../../../Utils/GetUserId";
export class CreateCarController {
  private _createCarUseCase: CreateCarUseCase;
  constructor(createCarUseCase: CreateCarUseCase) {
    this._createCarUseCase = createCarUseCase;
  }

  async handle(request: Request, response: Response) {
    const userData:ITokenData = getUserData(cookie.parse(request.headers.cookie).auth_token)
    const data = await this._createCarUseCase.execute(
      request.body,
      userData,
      request.files
    );
    return response.status(201).json(data);
  }
}
