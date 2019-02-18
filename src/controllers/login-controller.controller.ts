import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  WhereBuilder,
  FilterBuilder,
} from '@loopback/repository';
import {
  post,
  param,
  getFilterSchemaFor,
  getWhereSchemaFor,
  requestBody,
} from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';
import {OAuth2Client} from 'google-auth-library';

export class LoginControllerController {
  constructor(@repository(UserRepository) public userRepository: UserRepository) {

  }

  @post('/auth')
  async create(@requestBody({
    description: 'request object value',
    required: true,
    content: {
      'application/json': {
        schema: { type: 'object' },
      },
      'application/x-www-form-urlencoded': {
        schema: { type: 'object' },
      },
      'application/xml': {
        schema: { type: 'object' },
      },
    },
  }) data: Object): Promise<Object> {
    return { 'error': false };
  }

  @post('/login', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async findOrCreate(@requestBody({
    description: 'request object value',
    required: true,
    content: {
      'application/x-www-form-urlencoded': {
        schema: { type: 'object' },
      },
    },
  }) data: any): Promise<Object> {
    console.log(data);

    const whereBuilder = new WhereBuilder();
    whereBuilder.and({ 'uuid': data.uuid });

    const filterBuilder = new FilterBuilder();
    filterBuilder.where(whereBuilder.build());
    const myFilter = filterBuilder.build();

    const user = await this.userRepository.find(myFilter);

    const clientId = '792251877899-o5u2etn74ehtmd8ugsbql9sr9do8lidi.apps.googleusercontent.com';
    const client = new OAuth2Client(clientId);
    let payload = null;

    //test token https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=
    const ticket = await client.verifyIdToken({
      idToken: data.token,
      audience: clientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    payload = ticket.getPayload();
    let userid = null;

    if( payload ) {
      userid = payload['sub'];

      let myNewUser = new User();
      myNewUser.uuid = userid;
      myNewUser.name  =  payload.name as string;
      myNewUser.email = payload.email as string;

      this.userRepository.create(myNewUser);
    }

    //TODO crear el usuario

    console.log(payload);
    console.log(userid);
    //myNewUser.email

    return user;
  }

  @post('/login2', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async find(@param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter): Promise<User[]> {
    return await this.userRepository.find(filter);
  }
}
