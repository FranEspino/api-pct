import express,{Application} from 'express';
import cors from 'cors';
import login from '../routes/login';
import persons from '../routes/persona'

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        login: "/api/login",
        persons: "/api/personas",
    };
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middleware();
        this.routes();
        
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.login, login);
        this.app.use(this.apiPaths.persons, persons);

      }
    
    listen(){
        this.app.listen(this.port, () => {
            console.log("Server runing in: "+this.port);
        })
    }
}
export default Server;