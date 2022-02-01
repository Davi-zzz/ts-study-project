

export const mutationResolver = {
    QueryResult: {
        __resolveType: (obj:any) => {
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