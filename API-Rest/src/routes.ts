import { Router, Request, Response, NextFunction } from 'express'
import {CreateUserController} from './controllers/createUserController';

const router = Router();
const creatUserController = new CreateUserController;

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({mensagem: 'Bem vindo a nossa API'});
});

router.get('/usuarios', creatUserController.handle)

export {router};
