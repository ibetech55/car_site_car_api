import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarAddressesTable1705197060831
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "car_addresses",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "state",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "zip_code",
            type: "varchar(20)",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("car_addresses");
  }
}
