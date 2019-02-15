import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  getFilterSchemaFor,
  getWhereSchemaFor,
  requestBody,
} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';

export class LoginControllerController {
  constructor(@repository(UserRepository) public userRepository : UserRepository) {

  }

  @post('/auth')
  async create(@requestBody({
    description: 'request object value',
    required: true,
    content: {
      'application/json': {
        schema: {type: 'object'},
      },
      'application/x-www-form-urlencoded': {
        schema: {type: 'object'},
      },
      'application/xml': {
        schema: {type: 'object'},
      },
    },
  }) data: Object): Promise<Object> {
    return {'error': false};
  }

  @post('/login', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: {'x-ts-type': User}}},
      },
    },
  })
  async find(@param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter): Promise<User[]> {
    return await this.userRepository.find(filter);
  }
}
