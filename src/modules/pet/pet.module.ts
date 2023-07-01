import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { petProvider } from './pet.provider';
import { OwnerModule } from '../owner/owner.module';

@Module({
  imports: [OwnerModule],
  providers: [PetService, PetResolver, ...petProvider],
})
export class PetModule {}
