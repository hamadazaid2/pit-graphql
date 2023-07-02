import { Module, forwardRef } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { ownerProvider } from './owner.provider';
import { PetModule } from '../pet/pet.module';

@Module({
  imports: [forwardRef(() => PetModule)],
  providers: [OwnerResolver, OwnerService, ...ownerProvider],
  exports: [OwnerService],
})
export class OwnerModule {}
