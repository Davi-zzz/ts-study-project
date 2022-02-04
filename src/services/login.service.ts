import User from "../entity/User";
import { CustomError } from "../utils/error";
import { Service } from "typedi";
import { Tokenfy } from "../utils/jwt";
import { compare } from "bcrypt";

@Service()
export default class LoginService {

    findByLogin = async (data: { email: string, password: string }): Promise<User | CustomError | { user: User, token: string }> => {
        const result = await User.findOne({ where: { email: data.email } });

        if (result) {
            
            if ( await compare(data.password, result.password)) {

                const jwt = new Tokenfy();
                const token = await jwt.generateToken(result);
                result['password'] = 'secret';
                return { user: result, token: token }
            }
        }
        return {
            error: true,
            message: 'Email or Password Incorrect!',
            name: 'Incorrect Credentials'

        }

    }

}