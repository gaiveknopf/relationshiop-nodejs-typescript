import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ProfileUser1605327217490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        columnNames: ['id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'profiles',
        name: 'fk_profile_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UserProfile');
  }
}
