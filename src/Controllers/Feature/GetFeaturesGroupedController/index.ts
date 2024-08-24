
import { Request, Response } from "express";
import { GetFeaturesGroupedUseCase } from "../../../Presentation/FeatureUseCases/GetFeaturesGroupedUseCase";


export class GetFeaturesGroupedController {
    constructor(private _getFeaturesGroupedUseCase: GetFeaturesGroupedUseCase) {
    }

    async handle(request: Request, response: Response) {
        const data = await this._getFeaturesGroupedUseCase.execute();
        return response.status(200).json(data);
    }
}
