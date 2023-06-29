import { ConfigService } from '@nestjs/config';
import { CONFIG, PROVIDERS, SYSTEM } from '../../common/constants';
import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
  {
    provide: SYSTEM.SEQUELIZE,
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(CONFIG.DATABASE),
      });
      sequelize.addModels([]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
