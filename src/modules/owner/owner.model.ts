import { ObjectType, Field } from '@nestjs/graphql';
import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Pet } from '../pet/pet.model';
import { BaseModel } from 'src/common/models/base.model';

@Table({
  tableName: 'Owners',
  paranoid: true,
  underscored: true,
  timestamps: true,
})
@ObjectType()
export class Owner extends BaseModel {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  @Field()
  id: number;

  @Column(DataType.STRING)
  @Field()
  name: string;

  @HasMany(() => Pet)
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}
