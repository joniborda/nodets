import { Response, Request } from 'express'
import UserModel from './UserModel';
import UserRepository from './UserRepository'

class UserController {

    private userRepository: UserRepository;

    constructor(r: UserRepository) {
        this.userRepository = r;
    }

    public getUsers(req: Request, res: Response): any {
        var user: UserModel = this.userRepository.getById(1)
        return res.send(user);
    }
}

export default UserController
