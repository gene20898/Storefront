import Client from "../database";
import bcrypt from "bcrypt";
import { config } from "../config";

export type User = {
    id?: number,
    username: string,
    firstName: string,
    lastName: string,
    password_digest: string
};

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM users'

            const result = await conn.query(sql);
            conn.release();

            return result.rows;
        } catch (error: any) {
            throw new error(`Could not get users. Error: ${error}`);
        }
    }

    async show(id: string): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM users WHERE id=($1)';

            const result = await conn.query(sql,[id]);
            conn.release();

            return result.rows[0];
        } catch (error: any) {
            throw new error(`Could not find user. Error: ${error}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            const conn = await Client.connect();

            const sql = 'INSERT INTO users (username, firstName, lastName, password_digest) VALUES($1, $2, $3, $4) RETURNING *';
    
            const hash = bcrypt.hashSync(
                user.password_digest + config.pepper, 
                parseInt(config.salt as string)
            );

            const result = await conn.query(sql,[user.username, user.firstName, user.lastName, hash]);
            conn.release();
            
            return result.rows[0];
        } catch (error: any) {
            throw new error(`Could not add new user. Error: ${error}`);
        }
    }

    async delete(id: string): Promise<User> {
        try {
            const conn = await Client.connect()
            const sql = 'DELETE FROM users WHERE id=($1) RETURNING *';
            
            const result = await conn.query(sql,[id]);
            conn.release();
            
            return result.rows[0];
        } catch (error: any) {
            throw new error(`Could not delete product ${id}. Error: ${error}`);
        }
    }

    async authenticate(username: string, password: string): Promise<User | null> {
        const conn = await Client.connect()
        const sql = 'SELECT * FROM users WHERE username=($1)'
    
        const result = await conn.query(sql, [username])
        
        if(result.rows.length) {
          const user = result.rows[0]
          
          if (bcrypt.compareSync(password+config.pepper, user.password_digest)) {
            return user
          }
        }
        return null
    }
}