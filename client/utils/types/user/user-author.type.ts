import { TCountryShort } from '../country/country-short.type';
import { UserRoles } from "./UserRoles";

export type UserAuthor = {
    username: string;
    nickname: string;
    roles: UserRoles[];
    country: TCountryShort;
};
