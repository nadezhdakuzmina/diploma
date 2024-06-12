import type { AppDataState } from '@data/entities/appData/types';
import type { CitiesState } from '@data/entities/cities/types';
import type { CountriesState } from '@data/entities/countries/types';
import type { ReactionsState } from '@data/entities/reactions/types';
import type { ThreadsState } from '@data/entities/threads/types';
import type { UserState } from '@data/entities/user/types';

export interface State {
  appData: AppDataState;
  user: UserState;
  countries: CountriesState;
  cities: CitiesState;
  threads: ThreadsState;
  reactions: ReactionsState;
}
