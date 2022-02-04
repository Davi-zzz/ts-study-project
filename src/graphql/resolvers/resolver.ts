import LoginService from '../../services/login.service';
import UsersService from '../../services/users.service';
import { Middleware } from '../../utils/middleware';

let us = new UsersService;
let ls = new LoginService;
export const handler = {
    
    logon: async ({ input }) => {
        let result = await ls.findByLogin(input);
        return result;
    },
    getAllUsers: async ({ input }) => {
        
        if (input) {
            
            const result = await Middleware(input['token']);
            let listUser = await us.getAllUsers();
            return listUser;
        }
        return {
            error: true,
            name: 'User API Error',
            message: 'No information provided'
        }
    },
    createNewUser: async ({ input }) => {
        let data = await us.createUser(input);
        return data;
    },
    updateUser: async ({ input }) => {
        let resultUser = await us.userUpdate(input);
        return resultUser;
    },
    deleteUser: async ({ input }) => {
        let result = await us.deleteUser(input);
        return result;
    }

}