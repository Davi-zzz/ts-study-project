import User from "../entity/User";
import { CustomError } from "../utils/error";
import { Service } from "typedi";

@Service()
export default class LoginService {

    findByLogin = async (data: { email: string, password: string }): Promise<User | CustomError> => {


        const result = await User.findOne({ where: { email: data.email, password: data.password } });

        if (result) {
            result['password'] = 'secret';
            return result
        }
        return {
            error: true,
            message: 'Email or Password Incorrect!',
            name: 'Incorrect Credentials'

        }

    }
    
}