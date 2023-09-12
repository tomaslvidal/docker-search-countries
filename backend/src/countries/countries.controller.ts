import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) { }
  
  @Get()
  async searchCountries(@Query('search') search: string): Promise<any[]> {
    if (search && search.length >= 3) {
      const countries = await this.countriesService.searchCountries(search);

      return countries;
    }
    else {
      throw new HttpException('La consulta debe tener al menos 3 caracteres', HttpStatus.NO_CONTENT);
    }
  }
}
