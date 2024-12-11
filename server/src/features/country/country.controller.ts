import { Request, Response, NextFunction } from 'express';

import { CountryService } from './country.service';
import { RequestWithBody, RequestWithParams } from '../../../utils/types/typed-requests';
import { CountryCreateDto } from './dto/country-create.dto';
import { CountryUpdateDto } from './dto/country-update.dto';

class CountryController {
    constructor(
        private service = new CountryService()
    ) {}

    getCountries = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const countries = await this.service.getCountries()
            return res.send(countries)
        } catch(e) {
            next(e)
        }
    }
    getCountryByCode = async (req: RequestWithParams<{ code: string }>, res: Response, next: NextFunction) => {
        try {
            const country = await this.service.getCountryByCode(req.params.code)
            return res.send(country)
        } catch(e) {
            next(e)
        }
    }
    create = async (req: RequestWithBody<CountryCreateDto>, res: Response, next: NextFunction) => {
        try {
            await this.service.create(req.body)
            return res.send({ message: 'Country was added successfully' })
        } catch(e) {
            next(e)
        }
    }
    update = async (req: RequestWithBody<CountryUpdateDto>, res: Response, next: NextFunction) => {
        try {
            await this.service.update(req.body)
            return res.send({ message: "Country's data was successfully updated" })
        } catch(e) {
            next(e)
        }
    }
    delete = async (req: RequestWithBody<{ countryCode: string }>, res: Response, next: NextFunction) => {
        try {
            await this.service.delete(req.body.countryCode)
            return res.send({ message: 'Country was removed successfully' })
        } catch(e) {
            next(e)
        }
    }
}

export default new CountryController()