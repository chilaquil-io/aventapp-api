import {Entity, model, property} from '@loopback/repository';

@model()
export class Ride extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  itinerary_id: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;


  constructor(data?: Partial<Ride>) {
    super(data);
  }
}
