import { ImageTypes } from '../../../utils/enums/image-types.enum';
import { ApiError } from '../../../utils/error/api.error';
import { ImageService } from '../image/image.service';
import { CountryEntity } from './country.entity';
import { CountryRepository } from './country.repository';
import { CountryCreateDto } from './dto/country-create.dto';
import { CountryUpdateDto } from './dto/country-update.dto';

export class CountryService {
    constructor(
        private repo = new CountryRepository(),
        private imageService = new ImageService(),
    ) {}

    async getCountries(): Promise<CountryEntity[]> {
        return await this.repo.getCountries()
    }
    async getCountryByCode(code: string): Promise<CountryEntity> {
        return await this.repo.getCountryByCode(code)
    }
    async create(input: CountryCreateDto, flagImg?: Express.Multer.File): Promise<void> {
        const exists = await this.repo.existsByCriterias([
            { code: input.code },
            { name: input.name }
        ])
        if (exists) {
            throw ApiError.Conflict('Such country already exists')
        }

        const flagLink = await this.imageService.uploadImage({
            file: flagImg,
            type: ImageTypes.COUNTRY_FLAG
        })
        await this.repo.create({ ...input, flagLink: flagLink! })
    }
    async update(input: CountryUpdateDto, flagImg?: Express.Multer.File): Promise<void> {
        const { id, existImgLink, ...data } = input
        
        const exists = await this.repo.existsByCriterias({ id })
        if (!exists) {
            throw ApiError.NotFound('Such country was not found for updating')
        }

        if (existImgLink) {
            await this.imageService.deleteImage(existImgLink)
        }

        const flagLink = await this.imageService.uploadImage({
            file: flagImg,
            type: ImageTypes.COUNTRY_FLAG
        }) ?? null
        
        await this.repo.update(id, { ...data, flagLink: flagLink! })
    }
    async delete(code: string): Promise<void> {
        const flagLink = await this.repo.delete(code)

        await this.imageService.deleteImage(flagLink)
    }
}