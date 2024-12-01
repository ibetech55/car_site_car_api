import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTermsCondToCarTable1724601666735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "terms_condition",
                isNullable: true,
                type: "BOOL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('cars', 'terms_condition');
    }

}
