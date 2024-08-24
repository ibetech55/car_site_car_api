import { GetFeaturesGroupedUseCase } from ".";
import { FeatureTypeGroupedDto, GetFeatureDbDto } from "../../../Data/Feature/GetFeature";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

describe("Get features grouped by feature name", () => {
    let featureRepository: FeatureRepository;
    let _getFeaturesGroupedUseCase: GetFeaturesGroupedUseCase;
    beforeEach(() => {
        featureRepository = new FeatureRepository()
        _getFeaturesGroupedUseCase = new GetFeaturesGroupedUseCase(featureRepository)
    })
    it("Should group all features", async () => {
        const mockDbData: GetFeatureDbDto[] = [
            {
                _id: "111",
                feature_name: "Air Conditioning",
                feature_type: "Comfort and Convenience",
                active: true
            },
            {
                _id: "222",
                feature_name: "Cruise Control",
                feature_type: "Comfort and Convenience",
                active: true
            },
            {
                _id: "333",
                feature_name: "AM/FM Stereo",
                feature_type: "Entertainment and Instrumentation",
                active: true
            },
            {
                _id: "444",
                feature_name: "CD/MP3 (Multi Disc)",
                feature_type: "Entertainment and Instrumentation",
                active: true
            }
        ];
        const mockData: FeatureTypeGroupedDto[] = [
            {
                "featureType": "Comfort and Convenience",
                "features": [
                    "Air Conditioning",
                    "Cruise Control",
                    // "Power Door Locks",
                    // "Power Windows"
                ]
            },
            {
                "featureType": "Entertainment and Instrumentation",
                "features": [
                    "AM/FM Stereo",
                    "CD/MP3 (Multi Disc)",
                    // "CD/MP3 (Single Disc)",
                    // "Cassette",
                    // "DVD System",
                    // "Integrated Phone",
                    // "Navigation System",
                    // "Premium Sound"
                ]
            }
        ];

        jest
            .spyOn(featureRepository, "getFeatures")
            .mockImplementation(() => Promise.resolve(mockDbData));
        const data = await _getFeaturesGroupedUseCase.execute();
        expect(data).toEqual(mockData);
    });
});
