import * as express from 'express';

export class HelloRouter {

    private router: express.Router;

    constructor(app: express.Express) {
        this.router = express.Router();
		app.use(this.router);
		this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get('/hello', (req, res) => {
            return res.json("Hello world");
        });
    }

}