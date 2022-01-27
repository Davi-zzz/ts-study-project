import {Ierror} from "../interfaces/error";
import { Service } from "typedi";
import User from "../entity/User";


@Service()
export default class UsersService {
    
    createUser = async (data): Promise<User | Ierror> => {
        const user = await User.findOne({email: data.email});
        if ( user ) {
            return {
                error: true,
                name: 'User API Error', 
                message: 'This email is Already in use!'
            }
            
        }
        let createdUser = new User();
        createdUser.age = data.age;
        createdUser.email = data.email;
        createdUser.firstName = data.firstName;
        createdUser.lastName = data.lastName;
        createdUser.password = data.password;
        
        createdUser = await User.create(createdUser);
        
        await User.save(createdUser).then( () => {createdUser.password = 'secret';});
        
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
    
    getUser = async (data): Promise<User | Ierror> => {
        //todo
        const user = await User.findOneOrFail({id: data.id});

        if ( user ) {
            return user;
        }
        return {
            error: true,
            name: 'User API Error', 
            message: 'User dont Find!'
        }
    }

    getAllUsers = async (): Promise<User[] | Ierror> => {
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

    deleteUser = async (data): Promise< string | Ierror> => {
        
        const user = await User.findOne({id: data.id});

        if ( user ) {
            
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