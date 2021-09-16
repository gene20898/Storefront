import express, {Request, Response} from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';
import verifyAuthToken from '../services/authentication';

const store = new UserStore;

const index = async (_req:Request, res:Response) => {
    const users = await store.index();
    res.json(users);
}

const show = async (req:Request, res:Response) => {
    const user = await store.show(req.body.id);
    res.json(user);
}

const create = async (req:Request, res:Response) => {   
    try {
        const user: User = {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password_digest: req.body.password
        };
        const newUser = await store.create(user);
        var token = jwt.sign({user: newUser}, process.env.TOKEN_SECRET as jwt.Secret);
        res.json(token);
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const authenticate = async (req: Request, res: Response) => {
    const user = {
      username: req.body.username,
      password: req.body.password,
    }
    try {
        const u = await store.authenticate(user.username, user.password)
        var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET as jwt.Secret);
        res.json(token)
    } catch(error) {
        res.status(401)
        res.json({ error })
    }
  }

const userRoutes = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index)
    app.get('/users/:id', verifyAuthToken, show)
    app.post('/users', create)
    app.post('/users/authenticate', authenticate)
}

export default userRoutes