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
  uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: false,
  })
  phone: number;

  @property({
    type: 'number',
    required: false,
  })
  sex: number;

  @property({
    type: 'string',
    required: false,
  })
  engine: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
