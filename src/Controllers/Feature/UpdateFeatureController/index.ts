import { Request, Response } from "express";
import { UpdateFeatureUseCase } from "../../../Presentation/FeatureUseCases/UpdateFeatureUseCase ";

export class UpdateFeatureController {
  constructor(private _updateFeatureUseCase: UpdateFeatureUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._updateFeatureUseCase.execute(request.params.id, request.body);
    return response.status(200).json(data);
  }
}
