import UserModel from './UserModel'
import UserRepository from './UserRepository'

class MongoUserRepository implements UserRepository {
    public getById(id: number): UserModel {
        return new UserModel(1);
    }
}

export default MongoUserRepository