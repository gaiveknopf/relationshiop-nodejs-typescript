import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Tech from './Tech';
import User from './User';

@Entity('users_techs')
class UsersToTechs {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  active: boolean;

  @Column()
  userId: number;

  @Column()
  techId: number;

  @ManyToOne(() => User, user => user.usersToTechs, { primary: true })
  user: User;

  @ManyToOne(() => Tech, tech => tech.usersToTechs, { primary: true })
  tech: Tech;
}

export default UsersToTechs;
