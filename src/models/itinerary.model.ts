import {Entity, model, property} from '@loopback/repository';

@model()
export class Itinerary extends Entity {
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
  route_id: number;

  @property({
    type: 'date',
    required: true,
  })
  start_time: string;

  @property({
    type: 'string',
    required: true,
  })
  cron: string;


  constructor(data?: Partial<Itinerary>) {
    super(data);
  }
}
