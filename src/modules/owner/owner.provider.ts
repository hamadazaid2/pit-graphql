import { PROVIDERS } from 'src/common/constants';
import { Owner } from './owner.model';

export const ownerProvider = [
  {
    provide: PROVIDERS.OWNER_PROVIDER,
    useValue: Owner,
  },
];
