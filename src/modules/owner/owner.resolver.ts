import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './owner.model';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Pet } from '../pet/pet.model';
import { PetService } from '../pet/pet.service';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly petService: PetService,
  ) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownerService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'owner' })
  findAllOwners() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'owner' })
  findOneOwner(@Args('id', { type: () => Int }) id: number) {
    return this.ownerService.findOne(id);
  }

  @ResolveField((returns) => [Pet], { name: 'ownerPets' })
  ownerPets(@Parent() owner: Owner): Promise<Pet[]> {
    return this.petService.findWhere({ where: { ownerId: owner.id } });
  }

  @Mutation(() => Owner)
  updateOwner(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
    return this.ownerService.update(updateOwnerInput.id, updateOwnerInput);
  }

  @Mutation(() => Owner)
  removeOwner(@Args('id', { type: () => Int }) id: number) {
    return this.ownerService.remove(id);
  }
}
