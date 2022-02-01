import { CustomError } from "../utils/error";
import { Service } from "typedi";
import User from "../entity/User";

@Service()
export default class UsersService {

    createUser = async (data): Promise<User | CustomError> => {
        const user = await User.findOne({ email: data.email });
        
        let createdUser = User.create(data);
        
        if (user) {
            return {
                error: true,
                name: 'User API Error',
                message: 'This email is Already in use!'
            }

        }
        
        await User.save(createdUser).then(() => {  
            //removes the array characteristc from createdUser var
            //and treat the sensitive kind information
            const treatedUser = JSON.parse((JSON.stringify(createdUser)));
            treatedUser.password = 'secret'
            console.log(treatedUser);
            createdUser = treatedUser;

        });

        return createdUser[0];

    };
    userUpdate = async (data: Partial<User>): Promise<User | CustomError> => {

        const user = await User.findOneOrFail({ id: data.id });

        if (user) {

            try {
                await User.update(user, { ...data });
                return user;
            }
            catch {
                return {
                    error: true,
                    name: 'User API Error',
                    message: 'User cant be updated!'
                }
            }
        }
        return {
            error: true,
            name: 'User API Error',
            message: 'User dont Find!'
        }
    }

    getUser = async (data): Promise<User | CustomError> => {
        //todo
        const user = await User.findOneOrFail({ id: data.id });

        if (user) {
            return user;
        }
        return {
            error: true,
            name: 'User API Error',
            message: 'User dont Find!'
        }
    }

    getAllUsers = async (): Promise<User[] | CustomError> => {
        //todo
        console.log('entrou');
        const users = await User.find();

        if (users) {

            return users;
        }

        return {
            error: true,
            name: 'User API Error',
            message: 'There are no Users!'
        }
    }

    deleteUser = async (data): Promise<string | CustomError> => {

        const user = await User.findOne({ id: data.id });

        if (user) {

            await User.delete(User, data.id);

            return 'sucess to Delete User'

        }

        return {
            error: true,
            name: 'User API Error',
            message: 'User cant be deleted!'
        }
    }







}