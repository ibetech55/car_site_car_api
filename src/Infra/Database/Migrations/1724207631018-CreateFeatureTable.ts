import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFeatureTable1724207631018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "features",
                columns: [
                    {
                        name: "_id",
                        type: "UUID",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "feature_name",
                        type: "VARCHAR(50)",
                        isNullable: false,
                    },
                    {
                        name: "feature_type",
                        type: "varchar(50)",
                        isNullable: true,
                    },
                    {
                        name: "active",
                        type: "BOOL",
                        isNullable: true,
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
        await queryRunner.dropTable("features");
    }
}
