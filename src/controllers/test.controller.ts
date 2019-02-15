import { UserRepository } from '../repositories';
import { User } from '../models';
import { get, param, HttpErrors } from '@loopback/rest';
import { repository } from '@loopback/repository';

export class TestController {
  constructor(@repository(UserRepository) protected repo: UserRepository) { }

  // returns a list of our objects
  @get('/test')
  async list(@param.query.number('limit') limit = 10): Promise<User[]> {
    // throw an error when the parameter is not a non-positive integer
    if (!Number.isInteger(limit) || limit < 1) {
      throw new HttpErrors.UnprocessableEntity('limit is non-positive');
    } else if (limit > 100) {
      limit = 100;
    }
    return await this.repo.find({ limit });
  }
}
