import UsersService from '../../services/users.service';

let us = new UsersService;

export const handler = {
    
    getAllUsers: () => {
        let listUser = us.getAllUsers();
        return listUser;
    },
    createNewUser: async ({input}) => { 
        
        let data = await us.createUser(input);

        if (data['error']) {
            console.log('entrou no if');
            return data
        }
        console.log(data);

        return data;
    }
   
  };