import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './pet.model';
import { CreatePetInput } from './dto';
import { Owner } from '../owner/owner.model';

@Resolver((of) => Pet)
export class PetResolver {
  constructor(private petService: PetService) {}

  @Query((returns) => [Pet])
  pets() {
    return this.petService.findAll();
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petService.getOwner(pet.ownerId);
  }

  @Query((returns) => Pet)
  pet(@Args('id', { type: () => Int }) id: number) {
    return this.petService.findOne({ where: { id } });
  }

  @Mutation((retruns) => Pet)
  create(@Args('input') input: CreatePetInput) {
    console.log(input);
    return this.petService.createOne(input);
  }
}

// @Query ==> // To tell the resolver this is an actual query
// returns => [Pet] ==> type of what u re expecting
// [Pet] = array of pets

// @Args => the name of the argument will assign in schema.gql

// ------
//        Query                 ||              Mutatuion
//         FOR GET QUERIES      ||              FOR POST
