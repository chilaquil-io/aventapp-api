import {DefaultCrudRepository} from '@loopback/repository';
import {Car} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarRepository extends DefaultCrudRepository<
  Car,
  typeof Car.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Car, dataSource);
  }
}
