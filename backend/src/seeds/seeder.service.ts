import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/countries/entities/country.entity';
import { Repository } from 'typeorm';

import CountrySeed from 'src/seeds/country.seed';

@Injectable()
export class SeederService {
    constructor(
        @InjectRepository(Country)
        private readonly countryRepository: Repository<Country>,
    ) {
        
        this.seed();
    }

    async dataExists(): Promise<boolean> {
        const count = await this.countryRepository.count();
        return count > 0;
    }

    async seed(): Promise<void> {
        const dataExists = await this.dataExists();

        if(!dataExists) {
            const countrySeed = new CountrySeed(this.countryRepository); // Crear una instancia de CountrySeed
            
            await countrySeed.run();
        }
    }
}
