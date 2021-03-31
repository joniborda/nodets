import UserModel from './UserModel'

interface UserRepository {
    getById(id: number): UserModel
}

export default UserRepository