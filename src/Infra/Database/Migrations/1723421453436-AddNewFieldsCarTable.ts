import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNewFieldsCarTable1723421453436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "exterior_color",
                isNullable: false,
                type: "VARCHAR(50)",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "interior_color",
                isNullable: false,
                type: "VARCHAR(50)",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "condition",
                isNullable: false,
                type: "VARCHAR(20)",
                enum: ["Excellent", "Good", "Fair", "Poor"]
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "number_owners",
                isNullable: false,
                type: "INT",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "accident",
                isNullable: false,
                type: "BOOL",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "drive_train",
                isNullable: false,
                type: "VARCHAR(50)",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "engine",
                isNullable: false,
                type: "VARCHAR(50)",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "seller_notes",
                isNullable: false,
                type: "TEXT",
            })
        );

        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "active",
                isNullable: false,
                type: "BOOL",
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('cars', 'exterior_color');
        await queryRunner.dropColumn('cars', 'interior_color');
        await queryRunner.dropColumn('cars', 'condition');
        await queryRunner.dropColumn('cars', 'number_owners');
        await queryRunner.dropColumn('cars', 'accident');
        await queryRunner.dropColumn('cars', 'drive_train');
        await queryRunner.dropColumn('cars', 'engine');
        await queryRunner.dropColumn('cars', 'seller_notes');
        await queryRunner.dropColumn('cars', 'active');
    }

}
