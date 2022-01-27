import "reflect-metadata";
import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {schema} from "./graphql/schema/user.schema";
import {resolvers} from "../src/graphql/resolvers/resolver";
import {createConnection} from "typeorm";

createConnection().then(async connection => {
    
    console.log("initializing connection with the database...");
    
    console.log("Here you can setup and run express/koa/any other framework.");    
    
}).catch(error => console.log(error));

const app = express();

const port = 3080;

app.set('port', port);

app.use("/graphql", graphqlHTTP({ schema: schema, rootValue: resolvers , graphiql: true}));

export default app;

