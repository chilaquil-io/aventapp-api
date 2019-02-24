import {Entity, model, property} from '@loopback/repository';

@model()
export class Event extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'number',
    required: true,
  })
  createdAt: number;


  constructor(data?: Partial<Event>) {
    super(data);
  }
}
