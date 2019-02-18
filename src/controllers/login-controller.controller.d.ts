import { Filter } from '@loopback/repository';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class LoginControllerController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(data: Object): Promise<Object>;
    find(filter?: Filter): Promise<User[]>;
}
