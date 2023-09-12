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

  async searchCountries(search: string): Promise<Country[]> {
    return await this.countryRepository.find({
      where: [
        { name: Like(`%${search}%`) },
      ],
      take: 5,
    });
  }
}
