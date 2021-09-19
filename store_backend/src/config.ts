import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    pg_host: process.env.POSTGRES_HOST,
    pg_host_test: process.env.POSTGRES_HOST_TEST,
    db_name: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    db_name_test: process.env.POSTGRES_TEST_DB,
    env: process.env. ENV,
    bcrypt: process.env.BCRYPT_PASSWORD,
    salt: process.env.SALT_ROUNDS,
    pepper: process.env.PEPPER,
    audience: process.env.AUTH_AUDIENCE,
    issuer: process.env.AUTH_ISSUER,
    token: process.env.TOKEN_SECRET
}

