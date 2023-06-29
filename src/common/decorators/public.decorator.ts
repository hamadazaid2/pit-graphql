import { SetMetadata } from '@nestjs/common';
import { SYSTEM } from '../constants';

export const Public = () => SetMetadata(SYSTEM.PUBLIC, true);
