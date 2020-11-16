import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateQuestionsCategoriesCategories1605490444913
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions_categories_categories',
        columns: [
          {
            name: 'questionsId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'categoriesId',
            type: 'uuid',
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questions_categories_categories');
  }
}
