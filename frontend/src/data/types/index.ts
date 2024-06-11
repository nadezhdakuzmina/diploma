import type { AppDataState } from '@data/entities/appData/types';
import type { CitiesState } from '@data/entities/cities/types';
import type { CountriesState } from '@data/entities/countries/types';
import type { UserState } from '@data/entities/user/types';

export interface State {
  appData: AppDataState;
  user: UserState;
  countries: CountriesState;
  cities: CitiesState;
}
