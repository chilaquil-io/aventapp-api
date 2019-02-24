import {Entity, model, property} from '@loopback/repository';

@model()
export class Checkpoint extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  sequence: number;

  @property({
    type: 'string',
    required: true,
  })
  lat: string;

  @property({
    type: 'string',
    required: true,
  })
  long: string;


  constructor(data?: Partial<Checkpoint>) {
    super(data);
  }
}
