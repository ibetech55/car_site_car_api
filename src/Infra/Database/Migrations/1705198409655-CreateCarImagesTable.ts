import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarImagesTable1705198409655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "car_images",
            columns: [
              {
                name: "_id",
                type: "uuid",
                isPrimary: true,
                isNullable: false,
              },
              {
                name: "filename",
                type: "text",
                isNullable: false,
              },
              {
                name: "car_id",
                type: "uuid",
                isNullable: true,
              },
              {
                name: "position",
                type: "INT",
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
                columnNames:['car_id'],
                referencedColumnNames:['_id'],
                referencedTableName:'cars'
              },
            ]
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("car_images");
      }

}
