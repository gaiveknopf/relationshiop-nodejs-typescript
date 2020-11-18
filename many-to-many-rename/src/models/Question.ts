import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Category from './Category';

@Entity('questions')
class Question {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Category, category => category.questions)
  @JoinTable({
    name: 'categories_questions',
    joinColumns: [{ name: 'question_id' }],
    inverseJoinColumns: [{ name: 'category_id' }],
  })
  categories: Category[];
}

export default Question;

/**
 *
 *
 *
 joinColumns: [{ name: 'question_id' }],
 inverseJoinColumns: [{ name: 'category_id' }],
 */
