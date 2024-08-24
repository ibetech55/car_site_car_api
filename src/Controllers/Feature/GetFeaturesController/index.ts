
import { Request, Response } from "express";
import { CreateFeatureUseCase } from "../../../Presentation/FeatureUseCases/CreateFeatureUseCase";
import { GetFeaturesUseCase } from "../../../Presentation/FeatureUseCases/GetFeaturesUseCase ";


export class GetFeaturesController {
  constructor(private _getFeaturesUseCase: GetFeaturesUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._getFeaturesUseCase.execute();
    return response.status(200).json(data);
  }
}
