import { config } from './config'
import {Pool} from 'pg';


let Client: Pool|null = null;

if(config.env === 'test') {    
    Client = new Pool({
        host: config.pg_host_test,
        database: config.db_name_test,
        user: config.username,
        password: config.password,
    })

}
if(config.env === 'dev') {
    Client = new Pool({
        host: config.pg_host,
        port: 5432,
        user: config.username,
        database: config.db_name,
        password: config.password
      })
}

export default Client as Pool;