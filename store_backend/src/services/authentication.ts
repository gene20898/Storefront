import express, {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        
        const decoded = jwt.verify(token, config.token as string)
        next()
    } catch (error) {
        res.status(401)
    }
}

export default verifyAuthToken;