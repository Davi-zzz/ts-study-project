import { Service } from "typedi";
import User from "../entity/User";
import { Ierror } from "../interfaces/error";

@Service()
export default class UsersService {
    
    createUser = async (data: Partial<User>): Promise<User | Ierror> => {
        
        const user = await User.findOne({email: data.email});

        if ( user ) {
            return { 
                error: true, 
                name: 'API Users Error',
                message: 'User Already exists'
            }
        }
        const createdUser = await User.create({...data}).save();

        createdUser.password = 'secret';
        
        return createdUser;

        
    };
    userUpdate = async (data: Partial<User>): Promise<User | Ierror> => {

        const user = await User.findOneOrFail({id: data.id});

        if (user) {
            
            try {
                const result = await User.update(user, {...data} );
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
}