import LoginService from '../../services/login.service';
import UsersService from '../../services/users.service';

let us = new UsersService;
let ls = new LoginService;
export const handler = {
    
    getAllUsers: () => {
        let listUser = us.getAllUsers();
        return listUser;
    },
    createNewUser: async ({input}) => { 
        
        let data = await us.createUser(input);

        return data;
    },
    updateUser: async ({input}) => {
        let resultUser = await us.userUpdate(input);

        return resultUser;
    },
    logon: async ({input}) => {
        let result = await ls.findByLogin(input);
        return result;
    },
    deleteUser: async ({input}) => {
        let result = await us.deleteUser(input);
        return result;
    }
   
  };