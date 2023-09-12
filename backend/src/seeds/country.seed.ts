import { Seeder } from 'typeorm-seeding';
import { Repository } from 'typeorm';
import { Country } from '../countries/entities/country.entity';

export default class CreateCountries implements Seeder {
    constructor(
        private readonly countryRepository: Repository<Country>,
    ) { }

    public async run(): Promise<void> {
        const data = [
            { name: 'India', population: 1409902000 },
            { name: 'China', population: 1403426000 },
            { name: 'Estados Unidos', population: 331800000 },
            { name: 'Indonesia', population: 271629000 },
            { name: 'Pakistán', population: 224654000 },
            { name: 'Nigeria', population: 219743000 },
            { name: 'Brasil', population: 211420000 },
            { name: 'Bangladés', population: 181781000 },
            { name: 'Rusia', population: 146712000 },
            { name: 'México', population: 127792000 },
            { name: 'Japón', population: 126045000 },
            { name: 'Filipinas', population: 108772000 },
            { name: 'Egipto', population: 101000000 },
            { name: 'Etiopía', population: 100882000 },
            { name: 'Vietnam', population: 97591000 },
            { name: 'República del Congo', population: 89561000 },
            { name: 'Irán', population: 83914000 },
            { name: 'Turquía', population: 83752000 },
            { name: 'Alemania', population: 83421000 },
            { name: 'Tailandia', population: 68232000 },
        ];

        for (const item of data) {
            const country = this.countryRepository.create(item);
            
            await this.countryRepository.save(country);
        }
    }
}