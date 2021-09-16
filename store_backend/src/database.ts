import dotenv from 'dotenv';
import {Pool} from 'pg';
import { RDS } from 'aws-sdk';

dotenv.config();

const{
    POSTGRES_HOST,
    POSTGRES_HOST_TEST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV,
} = process.env

let Client: Pool|null = null;

if(ENV === 'test') {    
    Client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    })
}
if(ENV === 'dev') {
    Client = new Pool({
        host: POSTGRES_HOST,
        port: 5432,
        user: POSTGRES_USER,
        database: POSTGRES_DB,
        password: POSTGRES_PASSWORD,
      })
}

export default Client as Pool;