

export const mutationResolver = {
    QueryResult: {
        __resolveType: (obj:any) => {
            if (obj['id']) {
                return "User"
            }
            if (obj['error']) {
                
                return "Error"
            }
            if (obj['sucess']) {
                return "Sucess"
            }
            return null
        }
    }
};