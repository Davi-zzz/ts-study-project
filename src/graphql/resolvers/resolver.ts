import User from '../../entity/User';
import UsersService from '../../services/users.service';

let us = new UsersService;

export var root = {
    getAllUsers: () => {
        let listUser = us.getAllUsers();
        return listUser;
    },
    createNewUser: ({input}) => { 
        
        let createdUser = us.createUser(input);

        // console.log(createdUser);
        return createdUser;
    }
    
  };