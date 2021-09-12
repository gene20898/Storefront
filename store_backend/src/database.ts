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
console.log(`Environment : ${ENV}`);

if(ENV === 'test') {
    Client = new Pool({
        host: POSTGRES_HOST_TEST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    })
}
if(ENV === 'dev') {
    console.log("Creating dev Client database");
    Client = new Pool({
        host: POSTGRES_HOST,
        port: 5432,
        user: POSTGRES_USER,
        database: POSTGRES_DB,
        password: POSTGRES_PASSWORD,
      })
    console.log(Client);
}

export default Client as Pool;