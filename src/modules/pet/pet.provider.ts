import { PROVIDERS } from '../../common/constants';
import { Pet } from './pet.model';

export const petProvider = [
  {
    provide: PROVIDERS.PET_PROVIDER,
    useValue: Pet,
  },
];
