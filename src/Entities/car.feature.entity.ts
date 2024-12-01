import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("cars_features")
class CarsFeatures {
    @PrimaryColumn()
    _id?: string;

    @Column()
    car_id: string;

    @Column()
    feature_id: string;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    @DeleteDateColumn()
    deleted_at?: Date;

    constructor() {
        if (!this._id) {
            this._id = uuid();
        }
    }
}

export { CarsFeatures };
