import {Entity, model, property} from '@loopback/repository';

@model()
export class Route_checkpoint extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  route_id: number;

  @property({
    type: 'number',
    required: true,
  })
  checkpoint_id: number;


  constructor(data?: Partial<Route_checkpoint>) {
    super(data);
  }
}
