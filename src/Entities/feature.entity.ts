import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("features")
class Features {
    @PrimaryColumn()
    _id?: string;

    @Column()
    feature_name: string;

    @Column()
    feature_type: string;

    @Column()
    active: boolean;

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

export { Features };
