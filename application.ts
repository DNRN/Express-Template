import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as morgan from 'morgan';

import { RouteLoader } from './routes/routeloader';

export class Application {

    public settings

    private app: express.Express;
	private port: number;

    constructor() {
        this.app = express();

        this.loadSetting();
		this.port = process.env.PORT || this.settings.port;

        this.configure();
        this.loadMiddleware();
    }

    public start() {
        RouteLoader.LoadRoutes(this.app);

        this.app.listen(this.port);
		console.log("Application started at: " + this.port);
    }

    private loadSetting() {
        try {
            this.settings = JSON.parse(require('fs').readFileSync(__dirname + "/config/settings.json")); 
            console.log(this.settings);
        } catch (error) {
            console.log("Setting not found. Have you executed 'npm run config' ?");
            // TODO close down
        }        
    }

    private configure() {

    }

    private loadMiddleware() {

    }

}