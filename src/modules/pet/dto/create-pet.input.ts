import { InputType, Field, Int } from '@nestjs/graphql';

// You can use class-validator functions here!
@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
