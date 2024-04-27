import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1705196848830 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "car_users",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "first_name",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "last_name",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "dealership_name",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "type",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "text",
            isNullable: false,
          },
          {
            name: "phone_number",
            type: "varchar(30)",
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
    await queryRunner.dropTable("users");
  }
}
