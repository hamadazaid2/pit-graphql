import { Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet.model';
import { PROVIDERS } from 'src/common/constants';
import { CreatePetInput } from './input/create-pet.input';
import { FindOptions } from 'sequelize';
import { OwnerService } from '../owner/owner.service';
import { Owner } from '../owner/owner.model';

@Injectable()
export class PetService {
  constructor(
    @Inject(PROVIDERS.PET_PROVIDER) private readonly petRepository: typeof Pet,
    private readonly ownerService: OwnerService,
  ) {}

  async findWhere(options: FindOptions, scopes?: string[]): Promise<any> {
    const pets = await this.petRepository.scope(scopes).findAll(options);
    return pets;
  }

  async findAll(): Promise<any> {
    const pets = await this.petRepository.findAll();
    console.log(pets);
    return pets;
  }

  async findOne(option: FindOptions, scopes?: string[]): Promise<Pet> {
    const pet = await this.petRepository.scope(scopes).findOne(option);
    return pet;
  }

  async getOwner(ownerId: number): Promise<Owner> {
    const owner = await this.ownerService.findOne(ownerId);
    return owner;
  }

  async createOne(input: CreatePetInput): Promise<Pet> {
    const pet = await this.petRepository.create({ ...input });
    return pet;
  }
}
