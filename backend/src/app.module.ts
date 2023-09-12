import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederModule } from './seeds/seeder.module';

@Module({
  imports: [
    CountriesModule,
    SeederModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'search-countries-database-1',
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
