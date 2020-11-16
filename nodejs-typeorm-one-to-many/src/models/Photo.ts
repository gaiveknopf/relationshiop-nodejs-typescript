import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity('photos')
class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.photos)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Photo;
