import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
  usersToTechs: UsersToTechs[];
}

export default User;
