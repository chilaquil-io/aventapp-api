import {Entity, model, property} from '@loopback/repository';

@model()
export class User_car extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;

  @property({
    type: 'number',
    required: true,
  })
  car_id: number;


  constructor(data?: Partial<User_car>) {
    super(data);
  }
}
