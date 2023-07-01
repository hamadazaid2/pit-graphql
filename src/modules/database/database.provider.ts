import { ConfigService } from '@nestjs/config';
import { CONFIG, PROVIDERS, SYSTEM } from '../../common/constants';
import { Sequelize } from 'sequelize-typescript';
import { Pet } from '../pet/pet.model';
import { Owner } from '../owner/owner.model';

export const databaseProvider = [
  {
    provide: SYSTEM.SEQUELIZE,
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(CONFIG.DATABASE),
      });
      sequelize.addModels([Pet, Owner]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
