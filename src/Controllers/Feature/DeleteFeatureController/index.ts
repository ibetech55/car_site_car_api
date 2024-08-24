
import { Request, Response } from "express";
import { DeleteFeatureUseCase } from "../../../Presentation/FeatureUseCases/DeleteFeatureUseCase ";


export class DeleteFeatureController {
  constructor(private _deleteFeatureUseCase: DeleteFeatureUseCase) {
  }

  async handle(request: Request, response: Response) {
    const data = await this._deleteFeatureUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
