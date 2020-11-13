/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterTableOrphanages1605224746563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('orphanages', [
      new TableColumn({
        name: 'whatsapp',
        type: 'string',
        isNullable: true,
      }),
      new TableColumn({
        name: 'approved',
        type: 'boolean',
        default: false,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('orphanages', 'whatsapp');
    await queryRunner.dropColumn('orphanages', 'approved');
  }
}
