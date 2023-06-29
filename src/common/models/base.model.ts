import {
  Model,
  Column,
  DataType,
  DefaultScope,
  Scopes,
} from 'sequelize-typescript';
@DefaultScope({
  attributes: {
    exclude: ['deletedAt', 'deletedBy', 'password'],
  },
})
@Scopes(() => ({
  includeDeleted: {
    paranoid: false,
  },
}))
export class BaseModel extends Model {
  @Column(DataType.STRING)
  createdBy: string;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.STRING)
  updatedBy: string;

  @Column(DataType.DATE)
  updatedAt: Date;

  @Column(DataType.DATE)
  deletedAt: Date;

  @Column(DataType.STRING)
  deletedBy: string;
}
