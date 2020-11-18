import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UsersToTechs from './UsersToTechs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UsersToTechs, usersToTechs => usersToTechs.user, {
    cascade: true,
  })
  @JoinTable({
    name: 'users_techs',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'tech_id' }],
  })
  usersToTechs: UsersToTechs[];
}

export default User;
