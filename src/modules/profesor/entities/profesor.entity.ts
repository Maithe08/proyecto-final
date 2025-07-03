import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Materia } from 'src/modules/materia/entities/materia.entity';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  especialidad: string;

  @Column()
  correo: string;

  @OneToMany(() => Materia, (materia) => materia.profesor)
  materias: Materia[];
}
