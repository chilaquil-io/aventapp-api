import {
  repository
} from '@loopback/repository';
import { Provider, inject, ValueOrPromise } from '@loopback/context';
import { Strategy } from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile,
} from '@loopback/authentication';
import { HttpErrors } from '@loopback/rest';
import { BasicStrategy } from 'passport-http';

import { UserRepository } from '../repositories';

export class AuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
    @repository(UserRepository) public userRepository: UserRepository) { }

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }

    const name = this.metadata.strategy;
    if (name === 'BasicStrategy') {
      return new BasicStrategy(this.verify);
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }

  verify(username: string, password: string, cb: (err: Error | null, user?: UserProfile | false) => void) {
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, user) when user is authenticated
    // const foundUser = await this.userRepository.findOne({
    //   where: { email: username },
    // });

    const foundUser = {
      id: "1",
      uuid: "rx"
    }

    cb(null, foundUser); return;

    if (!foundUser) {
      cb(null, false);
    } else {
      cb(null, foundUser);
    }

    // const passwordMatched = await this.passwordHasher.comparePassword(
    //   credentials.password,
    //   foundUser.password,
    // );

    // if (!passwordMatched) {
    //   throw new HttpErrors.Unauthorized('The credentials are not correct.');
    // }
  }
}
