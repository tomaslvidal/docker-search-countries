import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CountriesModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '172.26.0.4',
      port: 3306,
      username: 'user',
      password: 'pass',
      database: 'proyect',
      synchronize: true,
      autoLoadEntities: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
