# Storefront
[![CircleCI](https://circleci.com/gh/gene20898/Storefront/tree/master.svg?style=svg)](https://circleci.com/gh/gene20898/Storefront/tree/master)

Storefront is a simple e-commerce website built with Angular, Node.js and Postgres. It provided API endpoints with a full CRUD operation, which each of them are secured with the simple authenication and encryption. It also implemented some basic CI/CD with CircleCI.

This project is created as a final project for Udacity Fullstack Javascript Developer nanodegree.

## Link for the website
http://udacity-project-gene-s3.s3-website-ap-southeast-1.amazonaws.com

## Application guide
Login then add the product to cart.
![guide1](https://user-images.githubusercontent.com/39151382/133916398-04a1a605-bfcd-4790-bd42-a45a93bcef0e.png)


Navigate to cart page, Fill in the form and checkout an order.
![guide2](https://user-images.githubusercontent.com/39151382/133916413-958f9a92-4c82-471d-863a-34e321f62dbf.png)

Navigate to order history page, the order will be displayed.
![guide3](https://user-images.githubusercontent.com/39151382/133916435-41716f6e-631e-4f2d-afc0-540fc2816c35.png)

## Installation

Clone the project
```bash
git clone https://github.com/gene20898/Storefront.git
```


## Running Storefront API locally

### Installation

Go to the project directory
```bash
cd store_backend
```
Install dependencies
```bash
npm install
```
### Set up and connect database
1. open the terminal
2. switch to the postgres
```user su postgres```
3. start psql 
```psql postgres```

in psql run the following:
```bash
CREATE USER store_backend_user WITH PASSWORD 'password123';
CREATE DATABASE store_backend_dev;
\c store_backend_dev
GRANT ALL PRIVILEGES ON DATABASE store_backend_dev TO store_backend_user;
ALTER USER store_backend_user WITH SUPERUSER;
```
*password and user can be any other name but it need to match with .env and database.json file*

4. create .env file in the repository
in .env file enter the value of following variables:
```
BCRYPT_PASSWORD=**insert your secret text here**
SALT_ROUNDS= 10
PEPPER=**insert your secret text here**

POSTGRES_HOST=127.0.0.1
POSTGRES_HOST_TEST=127.0.0.1
POSTGRES_DB=store_backend_dev
POSTGRES_TEST_DB=store_backend_test
POSTGRES_USER=store_backend_user
POSTGRES_PASSWORD=password123
ENV=dev

TOKEN_SECRET=gene20898tokensecret

AUTH_AUDIENCE=http://localhost:8080/order
AUTH_ISSUER=https://dev-35p-vy7k.us.auth0.com/
```
### Start the server

Start the project
```bash
npm run dev
```

## Running Storefront frontend locally
Go to the project directory
```bash
cd store_frontend
```
Install dependencies
```bash
npm install
```
Start the project
```bash
npm run start
```
Open http://localhost:4200 in the browser.

## License
[MIT](https://choosealicense.com/licenses/mit/)
