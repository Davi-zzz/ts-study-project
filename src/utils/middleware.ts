import { JwtPayload } from 'jsonwebtoken';
import { CustomError } from './error';
import { Tokenfy } from './jwt';

export async function Middleware (token?: string):Promise<CustomError | string | JwtPayload> { 
    
    if (!token) {
        return {
            error: true,
            name: 'Authentication Error',
            message: 'You are not Authenticated!'
        }
    }
    
    const authenticate = new Tokenfy();
    return await authenticate.verify(token);
}