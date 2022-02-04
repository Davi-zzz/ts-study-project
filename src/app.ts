import "reflect-metadata";
import * as express from 'express';
import { mutationResolver } from './graphql/resolvers/union.resolver';
import { handler} from './graphql/resolvers/resolver';
import { graphqlHTTP } from 'express-graphql';
import {typeDefs} from "./graphql/schema/user.schema";
import {createConnection} from "typeorm";
import { makeExecutableSchema } from "@graphql-tools/schema";

createConnection().then(async connection => {
    
    console.log("initializing connection with the database...");
    
    console.log("Here you can setup and run express/koa/any other framework.");    
    
}).catch(error => console.log(error));

const app = express();

app.set('port', 3080);

const schema = makeExecutableSchema({typeDefs, resolvers: mutationResolver });

app.use("/graphql", graphqlHTTP({ schema, rootValue: handler, graphiql: true, }));

export default app;

