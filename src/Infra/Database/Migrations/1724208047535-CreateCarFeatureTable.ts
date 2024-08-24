import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarFeatureTable1724208047535 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars_features",
                columns: [
                    {
                        name: "_id",
                        type: "UUID",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "feature_id",
                        type: "UUID",
                        isNullable: false,
                    },
                    {
                        name: "car_id",
                        type: "UUID",
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
                foreignKeys: [
                    {
                        columnNames: ['feature_id'],
                        referencedColumnNames: ['_id'],
                        referencedTableName: 'features'
                    },
                    {
                        columnNames: ['car_id'],
                        referencedColumnNames: ['_id'],
                        referencedTableName: 'cars'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars_features");
    }

}
