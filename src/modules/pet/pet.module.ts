import { Module, forwardRef } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { petProvider } from './pet.provider';
import { OwnerModule } from '../owner/owner.module';

@Module({
  imports: [forwardRef(() => OwnerModule)],
  providers: [PetService, PetResolver, ...petProvider],
  exports: [PetService],
})
export class PetModule {}
