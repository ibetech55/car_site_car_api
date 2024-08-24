import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTransmissionCarTable1723424272822 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "transmission",
                isNullable: false,
                type: "VARCHAR(20)",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('cars', 'transmission');
    }

}
