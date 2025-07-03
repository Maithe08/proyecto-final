import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './modules/estudiante/estudiante.module';
import { CursoModule } from './modules/curso/curso.module';
import { MateriaModule } from './modules/materia/materia.module';
import { ProfesorModule } from './modules/profesor/profesor.module';
import { AsignacionModule } from './modules/asignacion/asignacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    EstudianteModule,
    CursoModule,
    MateriaModule,
    ProfesorModule,
    AsignacionModule,
  ],
})
export class AppModule {}
