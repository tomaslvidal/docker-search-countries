import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>
  ) { }

  async getTotalHabitants(): Promise<number> {
    const totalHabitants = await this.countryRepository
      .createQueryBuilder(this.countryRepository.metadata.tableName)
      .select('SUM(country.habitants)', 'total')
      .getRawOne();

    return totalHabitants.total;
  }

  async searchCountries(search: string): Promise<Country[]> {
    // Obtengo la población total
    const totalHabitants = await this.getTotalHabitants();

    const countries = await this.countryRepository.find({
      where: [
        { name: Like(`%${search}%`) },
      ],
      take: 5,
    });

    // Paso por cada resultado, y asigno el valor para la key 'habPercentageWithTotal'
    for (const country of countries) {
      country.habPercentageWithTotal = (country.habitants / totalHabitants) * 100;

      country.habPercentageWithTotal = parseFloat(country.habPercentageWithTotal.toFixed(3));
    }

    return countries;
  }
}
