import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNewFieldsCarTable21723423747429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "status",
                isNullable: false,
                type: "VARCHAR(50)",
            })
        );
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "clean_history_report",
                isNullable: false,
                type: "BOOL",
            })
        );
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "has_issue",
                isNullable: false,
                type: "BOOL",
            })
        );
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "number_keys",
                isNullable: false,
                type: "INT",
            })
        );
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "has_payments",
                isNullable: false,
                type: "BOOL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('cars', 'status');
        await queryRunner.dropColumn('cars', 'clean_history_report');
        await queryRunner.dropColumn('cars', 'has_issue');
        await queryRunner.dropColumn('cars', 'number_keys');
        await queryRunner.dropColumn('cars', 'has_payments');
    }

}
