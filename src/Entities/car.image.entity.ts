import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("car_images")
class CarImages {
  @PrimaryColumn()
  _id?: string;

  @Column()
  filename: string;

  @Column()
  car_id: string;

  @Column()
  position: number;

  @Column()
  default_image: boolean;

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

export { CarImages };
