import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddForeignQuestionsCategoriesCategories1605490710366
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'questions_categories_categories',
      new TableForeignKey({
        columnNames: ['questionsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        name: 'Pk_questions_categories',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'questions_categories_categories',
      new TableForeignKey({
        columnNames: ['categoriesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        name: 'Pk_categories_questions',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'questions_categories_categories',
      'Pk_questions_categories',
    );
    await queryRunner.dropForeignKey(
      'questions_categories_categories',
      'Pk_categories_questions',
    );
  }
}
