import { CountryEntity } from './country.entity';
import { CountryRepository } from './country.repository';
import { CountryCreateDto } from './dto/country-create.dto';
import { CountryUpdateDto } from './dto/country-update.dto';

export class CountryService {
    constructor(
        private repo = new CountryRepository()
    ) {}

    async getCountries(): Promise<CountryEntity[]> {
        return await this.repo.getCountries()
    }
    async getCountryByCode(code: string): Promise<CountryEntity> {
        return await this.repo.getCountryByCode(code)
    }
    async create(input: CountryCreateDto): Promise<void> {
        return await this.repo.create(input)
    }
    async update(input: CountryUpdateDto): Promise<void> {
        const { id, ...data } = input
        
        return await this.repo.update(id, data)
    }
    async delete(code: string): Promise<void> {
        return await this.repo.delete(code)
    }
}