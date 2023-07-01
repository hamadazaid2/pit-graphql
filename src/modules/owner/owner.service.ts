import { Inject, Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { PROVIDERS } from 'src/common/constants';
import { Owner } from './owner.model';

@Injectable()
export class OwnerService {
  constructor(
    @Inject(PROVIDERS.OWNER_PROVIDER)
    private readonly ownerRepository: typeof Owner,
  ) {}
  create(createOwnerInput: CreateOwnerInput) {
    return this.ownerRepository.create({ ...createOwnerInput });
  }

  findAll() {
    return this.ownerRepository.findAll();
  }

  findOne(id: number) {
    return this.ownerRepository.findByPk(id);
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.ownerRepository.update(
      { ...updateOwnerInput },
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.ownerRepository.destroy({ where: { id } });
  }
}
