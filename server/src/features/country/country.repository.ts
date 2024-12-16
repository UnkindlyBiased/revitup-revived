import { ILike, Repository } from 'typeorm';

import { CountryEntity } from './country.entity';
import { AppDataSource } from '../../../utils/data/app.data-source';
import { CountryCreateDto } from './dto/country-create.dto';
import { ApiError } from '../../../utils/error/api.error';
import { PartialKeys } from '../../../utils/types/partial-keys';
import { CountryUpdateDto } from './dto/country-update.dto';

export class CountryRepository {
    constructor(
        private repo: Repository<CountryEntity> = AppDataSource.getRepository(CountryEntity)
    ) {}

    async getCountries(): Promise<CountryEntity[]> {
        return await this.repo.find({
            order: { name: 'ASC' }
        })
    }
    async getCountryByCode(code: string): Promise<CountryEntity> {
        const entity = await this.repo.findOneBy({
            code: ILike(code)
        })
        if (!entity) {
            throw ApiError.NotFound('Such country does not exist')
        }

        return entity
    }
    async create(input: CountryCreateDto): Promise<void> {
        const entity = this.repo.create(input)
        await this.repo.insert(entity)
    }
    async update(id: string, input: CountryCreateDto): Promise<void> {
        await this.repo.update({ id }, input)
    }
    async delete(code: string): Promise<string> {
        const entity = await this.repo.findOneBy({
            code: ILike(code)
        })
        if (!entity) {
            throw ApiError.NotFound('Such country does not exist')
        }

        await this.repo.remove(entity)
        return entity.flagLink
    }
    async existsByCriterias(input: PartialKeys<CountryUpdateDto> | PartialKeys<CountryUpdateDto>[]): Promise<boolean> {
        return await this.repo.existsBy(input)
    }
}