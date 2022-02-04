

export const mutationResolver = {
    QueryResultGeneric: {
        __resolveType: (obj:any) => {
            if (obj['id']) {                
                return "User"
            }
            if (obj['sucess']) {
                return "Sucess"
            }
            if (obj['user']){
                return "AuthenticatedUser"
            }
            if (obj['error']) {
                return "Error"
            }            
            return null
        }
    }
};