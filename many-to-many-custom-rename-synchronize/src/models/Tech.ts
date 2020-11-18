import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UsersToTechs from './UsersToTechs';

@Entity('techs')
class Tech {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UsersToTechs, usersToTechs => usersToTechs.tech, {
    cascade: true,
  })
  @JoinTable({
    name: 'users_techs',
    joinColumns: [{ name: 'tech_id' }],
    inverseJoinColumns: [{ name: 'user_id' }],
  })
  usersToTechs: UsersToTechs[];
}

export default Tech;
