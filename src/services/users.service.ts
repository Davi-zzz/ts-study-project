import { Sucess } from './../utils/sucess';
import { genSalt, hash } from "bcrypt";
import { CustomError } from "../utils/error";
import { Service } from "typedi";
import User from "../entity/User";
import { Jwt } from "jsonwebtoken";


@Service()
export default class UsersService {

    createUser = async (data): Promise<User | CustomError> => {
        
        const user = await User.findOne({ email: data.email });
        
        if (user) {
            return {
                error: true,
                name: 'User API Error',
                message: 'This email is Already in use!'
            }
        }

        const hash_salts = await genSalt(15);

        data['password'] = await hash(data.password, hash_salts);
      
        let createdUser:any = User.create(data);

        await User.save(createdUser).then(() => {

            //removes the array characteristc from createdUser var
            //and treat the sensitive kind information
            const treatedUser = JSON.parse((JSON.stringify(createdUser)));
            treatedUser.password = 'secret'
            console.log(treatedUser);
            createdUser = treatedUser;

        });

        return createdUser;

    };
    userUpdate = async (data: Partial<User>): Promise<User | CustomError> => {

        let user = await User.findOne({ id: data.id });

        if (user) {

            try {

                const hash_salts = await genSalt(15);

                data['password'] = await hash(data.password, hash_salts);

                await User.update(user, { ...data });

                user = await User.findOneOrFail({ id: data.id });      

                return user;
                
            }
            catch (err ){
                return {
                    error: true,
                    name: 'User API Error',
                    message: `User cant be updated! \n ${err}` 
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

        const user = await User.findOne({ id: data.id });

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

    deleteUser = async (data): Promise<Sucess | CustomError> => {
        console.log(data);
        
        const user = await User.findOne({ id: data });

        if (user) {

            await User.delete(user, data.id);

            return {
                sucess: true,
                message: 'User deleted',
                name: 'User API Sucess'
            }

        }

        return {
            error: true,
            name: 'User API Error',
            message: 'User cant be deleted!'
        }
    }







}