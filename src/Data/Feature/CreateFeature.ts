export interface CreateFeatureDto {
    featureName: string;
    featureType: string;
}

export interface CreateFeatureDbDto {
    feature_name: string;
    feature_type: string;
    active: boolean;
}