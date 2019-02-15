import { Entity, model, property } from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  phone: number;

  @property({
    type: 'number',
    required: true,
  })
  sex: number;

  @property({
    type: 'string',
    required: true,
  })
  engine: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
