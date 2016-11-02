import * as express from 'express';
import { HelloRouter } from './hello.route';

export class RouteLoader {

    public static LoadRoutes(app: express.Express) {
        let helloRouter = new HelloRouter(app);
    } 

}