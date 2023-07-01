import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { ownerProvider } from './owner.provider';

@Module({
  providers: [OwnerResolver, OwnerService, ...ownerProvider],
  exports: [OwnerService],
})
export class OwnerModule {}
