import { Seeder } from 'typeorm-seeding';
import { Repository } from 'typeorm';
import { Country } from '../countries/entities/country.entity';

export default class CreateCountries implements Seeder {
    constructor(
        private readonly countryRepository: Repository<Country>,
    ) { }

    public async run(): Promise<void> {
        const data = [
            { name: 'India', habitants: 1409902000 },
            { name: 'China', habitants: 1403426000 },
            { name: 'Estados Unidos', habitants: 331800000 },
            { name: 'Indonesia', habitants: 271629000 },
            { name: 'Pakistán', habitants: 224654000 },
            { name: 'Nigeria', habitants: 219743000 },
            { name: 'Brasil', habitants: 211420000 },
            { name: 'Bangladés', habitants: 181781000 },
            { name: 'Rusia', habitants: 146712000 },
            { name: 'México', habitants: 127792000 },
            { name: 'Japón', habitants: 126045000 },
            { name: 'Filipinas', habitants: 108772000 },
            { name: 'Egipto', habitants: 101000000 },
            { name: 'Etiopía', habitants: 100882000 },
            { name: 'Vietnam', habitants: 97591000 },
            { name: 'República del Congo', habitants: 89561000 },
            { name: 'Irán', habitants: 83914000 },
            { name: 'Turquía', habitants: 83752000 },
            { name: 'Alemania', habitants: 83421000 },
            { name: 'Tailandia', habitants: 68232000 },
        ];

        for (const item of data) {
            const country = this.countryRepository.create(item);
            
            await this.countryRepository.save(country);
        }
    }
}