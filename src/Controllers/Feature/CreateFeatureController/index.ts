
import { Request, Response } from "express";
import { CreateFeatureUseCase } from "../../../Presentation/FeatureUseCases/CreateFeatureUseCase";


export class CreateFeatureController {
  constructor(private _createFeatureUseCase: CreateFeatureUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._createFeatureUseCase.execute(request.body);
    return response.status(201).json(data);
  }
}
