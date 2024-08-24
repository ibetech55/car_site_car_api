
import { Request, Response } from "express";
import { GetFeatureByIdUseCase } from "../../../Presentation/FeatureUseCases/GetFeatureByIdUseCase ";


export class GetFeatureByIdController {
  constructor(private _getFeatureByIdUseCase: GetFeatureByIdUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._getFeatureByIdUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
