import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Tech from './Tech';
import User from './User';

@Entity('users_techs')
class UsersToTechs {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  active: boolean;

  @Column()
  user_id: number;

  @Column()
  tech_id: number;

  @ManyToOne(() => User, user => user.usersToTechs, { primary: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Tech, tech => tech.usersToTechs, { primary: true })
  @JoinColumn({ name: 'tech_id' })
  tech: Tech;
}

export default UsersToTechs;
