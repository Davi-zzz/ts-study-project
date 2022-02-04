import { private_key, public_key } from './keys';
import { JwtPayload, sign, verify } from "jsonwebtoken";

import User from "../entity/User";

export class Tokenfy {

    generateToken = async (obj: User): Promise<string> => {

        let resultToken = await sign(
            { "id": obj.id },
            private_key,
            {
                expiresIn: '5m', algorithm: 'RS256'
            });
            
            verify(resultToken, public_key, { algorithms: ['RS256'], complete:true });

        return resultToken;
    }
    
    verify = async (token: string): Promise<string | JwtPayload> => {

        return verify(token, public_key, { algorithms: ['RS256'] });
    }
}