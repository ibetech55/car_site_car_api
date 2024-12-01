import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnDefaultImageToCarImages1729054482620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "car_images",
            new TableColumn({
                name: "default_image",
                isNullable: true,
                type: "BOOL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('car_images', 'default_image');
    }

}
