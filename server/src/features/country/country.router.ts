import { Router } from 'express';

import CountryController from './country.controller';
import { authMiddleware } from '../../../utils/middleware/auth.middleware';
import { roleMiddleware } from '../../../utils/middleware/role.middleware';
import { UserRoles } from '../../../utils/enums/user-roles.enum';
import { validationMiddleware } from '../../../utils/middleware/validation.middleware';
import { CountryCreateDto } from './dto/country-create.dto';
import { CountryUpdateDto } from './dto/country-update.dto';

export const CountryRouter = Router()

CountryRouter.get('/', CountryController.getCountries)
CountryRouter.get('/:code', CountryController.getCountryByCode)
CountryRouter.post(
    '/',
    authMiddleware,
    roleMiddleware(UserRoles.CREATOR),
    validationMiddleware(CountryCreateDto),
    CountryController.create
)
CountryRouter.put(
    '/',
    authMiddleware,
    roleMiddleware(UserRoles.CREATOR),
    validationMiddleware(CountryUpdateDto),
    CountryController.update
)
CountryRouter.delete(
    '/',
    authMiddleware,
    roleMiddleware(UserRoles.CREATOR),
    CountryController.delete
)