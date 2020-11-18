import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Question from './Question';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Question, question => question.categories)
  questions: Question[];
}

export default Category;
