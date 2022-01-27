import UsersService from '../../services/users.service';

let us = new UsersService;

export var resolvers = {
    
    getAllUsers: () => {
        let listUser = us.getAllUsers();
        return listUser;
    },
    createNewUser: async ({input}) => { 
        
        let data = await us.createUser(input);
        console.log(data);
        return data;
    },
    TesteOlavo: {
        __resolveType(obj) {
            console.log('here');
            if (obj['id']) {
                return "User"
            }
            if (obj['error']) {
                console.log('here');
                
                return "Error"
            }
            console.log('here');
            return null
        }
    }
  };