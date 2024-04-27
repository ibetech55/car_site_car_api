import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("cars")
class Cars {
  @PrimaryColumn()
  _id?: string;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  version: string;

  @Column()
  price: number;

  @Column()
  car_user_id: string;


  @Column()
  car_address_id: string;


  @Column()
  mileage: number;


  @Column()
  car_year: number;


  @Column()
  vin: string;

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

export { Cars };
