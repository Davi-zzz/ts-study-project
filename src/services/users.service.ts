import { Isucess } from './../interfaces/sucess';
import { Ierror } from './../interfaces/error';
import { Service } from "typedi";
import User from "../entity/User";
import { create } from 'domain';



@Service()
export default class UsersService {
    createUser = async (data): Promise<User | Ierror> => {
        const user = await User.findOne({email: data.email});

        if ( user ) {
            return { 
                error: true, 
                name: 'API Users Error',
                message: 'User Already exists'
            }
        }
        let createdUser = new User();
        createdUser.age = data.age;
        createdUser.email = data.email;
        createdUser.firstName = data.firstName;
        createdUser.lastName = data.lastName;
        createdUser.password = data.password;
        
        createdUser = await User.create(createdUser);
        console.log(createdUser);
        
        await User.save(createdUser).then(() => {  createdUser.password = 'secret';
        return createdUser; });
        
        createdUser.password = 'secret';
        return createdUser;
        
        
              


        
    };
    userUpdate = async (data: Partial<User>): Promise<User | Ierror> => {

        const user = await User.findOneOrFail({id: data.id});

        if (user) {
            
            try {
                await User.update(user, {...data} );
                return user;
            }
            catch {
                
                return { 
                    error: true, 
                    name: 'API Users Error',
                    message: 'Error to update this user'
                }
            }
        }
        return {
            error: true,
            name: 'API Users Error',
            message: 'User doesnt exists'
        }
    }
    
    getUser = async (data): Promise<User | Ierror> => {

        const user = await User.findOneOrFail({id: data.id});

        if ( user ) {
            return user;
        }
        return {
            error: true,
            name: "API User Error",
            message: "User not find"
        }
    }

    getAllUsers = async (): Promise<User[] | Ierror> => {
        //todo
        const users = await User.find();

        console.log('entrou');
        if (users) {
            
            return users;
        }
        return {
            error: false,
            name: "API User Error",
            message: "There are no Users"
        }
    }

    deleteUser = async (data): Promise< Isucess | Ierror> => {
        
        const user = await User.findOne({id: data.id});

        if ( user ) {
            
            await User.delete(User, data.id);

            return {
                sucess: true,
                message: 'User deleted',
                name: 'API User Operation Sucess'
            } 
        }

        return {
            error: true,
            message: 'User deleted',
            name: 'API User Error'
        }
    }







}