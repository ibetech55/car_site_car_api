export interface GetFeatureDto {
    id: string;
    featureName: string;
    featureType: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface GetFeatureDbDto {
    _id: string;
    feature_name: string;
    feature_type: string;
    active: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export interface FeatureTypeGroupedDto {
    featureType: string;
    features: string[]
}