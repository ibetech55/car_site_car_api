import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarImagesTable1705197717299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "make",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "model",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "version",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "car_user_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "car_address_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "price",
            type: "INT",
            isNullable: false,
          },
          {
            name: "mileage",
            type: "INT",
            isNullable: true,
          },
          {
            name: "car_year",
            type: "INT",
            isNullable: false,
          },
          {
            name: "body_style",
            type: "varchar(100)",
            isNullable: true
          },
          {
            name: "vin",
            type: "text",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "TIMESTAMPTZ",
            default: "NOW()",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "TIMESTAMPTZ",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "TIMESTAMPTZ",
            isNullable: true,
          },
        ],
        foreignKeys:[
          {
            columnNames:['car_user_id'],
            referencedColumnNames:['_id'],
            referencedTableName:'car_users'
          },
          {
            columnNames:['car_address_id'],
            referencedColumnNames:['_id'],
            referencedTableName:'car_addresses'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars");
  }
}
