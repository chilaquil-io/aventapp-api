import {Entity, model, property} from '@loopback/repository';

@model()
export class Ride_request extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  ride_id: number;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;


  constructor(data?: Partial<Ride_request>) {
    super(data);
  }
}
