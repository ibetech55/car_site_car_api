import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("car_users")
class CarUsers {
  @PrimaryColumn()
  _id?: string;

  @Column()
  first_name?: string;

  @Column()
  last_name?: string;

  @Column()
  dealership_name?: string;

  @Column()
  type?: string;

  @Column()
  email: string;

  @Column()
  user_id: string;

  @Column()
  phone_number: string;

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

export { CarUsers };
