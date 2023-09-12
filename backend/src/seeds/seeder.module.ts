import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { Country } from 'src/countries/entities/country.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Country])],
    providers: [SeederService],
})

export class SeederModule { }