import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/models/base.model';
import { Owner } from '../owner/owner.model';

@Table({
  tableName: 'Pets',
  underscored: true,
  paranoid: true,
  timestamps: true,
})
@ObjectType()
export class Pet extends BaseModel {
  @PrimaryKey
  @AutoIncrement
  @Field((type) => Int)
  @Column(DataType.INTEGER)
  id: number;

  @Field()
  @Column(DataType.STRING)
  name: string;

  @Field({ nullable: true })
  @Column(DataType.STRING)
  type?: string;

  @Column(DataType.INTEGER)
  @ForeignKey(() => Owner)
  @Field((type) => Int)
  ownerId: number;

  @BelongsTo(() => Owner)
  @Field((type) => Owner)
  owner: Owner;
}

// @Field ==> // To tell graphql which property of this class will a part of the schema!
