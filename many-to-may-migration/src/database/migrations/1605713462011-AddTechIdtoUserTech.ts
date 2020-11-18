import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddTechIdtoUserTech1605713462011
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users_techs',
      new TableColumn({
        name: 'tech_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'users_techs',
      new TableForeignKey({
        columnNames: ['tech_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'techs',
        name: 'Pk_TechUsers',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users_techs', 'Pk_TechUsers');
    await queryRunner.dropColumn('users_techs', 'tech_id');
  }
}
