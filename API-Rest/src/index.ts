import 'reflect-metadata';
import  Express, { NextFunction, Request, Response }  from "express";
import {router} from './routes';
import createConnection from './database'

createConnection;
const server = Express();

server.use(router);

server.listen(5000, () => {
    console.log("Servidor on na porta 5000 http://localhost:5000/");
});