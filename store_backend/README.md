# Storefront backend
This the the backend of the storefront.
Api endpoints will be provided for the full CRUD and other operations to the data model.
Each class respresentation model will be link to each table in PostgreSQL database.
JWTs is used for the authentication and all of the password will be encrypted for the security purpose.

# Set up and connect database
1. open the terminal
2. switch to the postgres
```user su postgres```
3. start psql 
```psql postgres```

in psql run the following:
```
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
POSTGRES_DB=store_backend_dev
POSTGRES_TEST_DB=store_backend_test
POSTGRES_USER=store_backend_user
POSTGRES_PASSWORD=password123
ENV=dev

TOKEN_SECRET=gene20898tokensecret
```
5. in the terminal enter the project repo and run the following:
```
npm install
```

# Start the server
start by run
```npm run start```

# Api endpoints
## Users 
**Create user:** send POST request to http://localhost:8080/users with the body in JSON format as following:
```
{
  "username":"Steven123",
  "firstName":"Steven",
  "lastName":"Smith",
  "password":"password1234"
}
```
**Authenticate:** send POST request to http://localhost:8080/users/authenticate with the body in JSON format as following:
```
{
  "username":"Steven123",
  "password":"password1234"
}
```
**Show:** send GET request to http://localhost:8080/users/:id with the body in JSON format as following [required JTWs token]:
```
{
  "id":1
}
```
**Index:** send GET request to http://localhost:8080/users [required JTWs token]

## Product
**Create:** send POST request to http://localhost:8080/products with the body in JSON format as following [required JTWs token]:
```
  {
      "name": "Shirt",
      "price": 29.99,
      "category": "clothes",
      "url": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
      "description": "Wear it with style!"
}

```
**Show:** send GET request to http://localhost:8080/product/:id with the body in JSON format as following:
```
{
  "id":1
}
```
**Index:** send GET request to http://localhost:8080/products

## Dashboard
**Get top five popular product:** send GET request to http://localhost:8080/dashboard/top-five-products

**Get products from category:** send GET request to http://localhost:8080/dashboard/products/:category with the body in JSON format as following [required JTWs token]:
```
{
  "category":"plant"
}
```
**Get current order from user id:** send GET request to app.get http://localhost:8080/dashboard/orders/current/:user_id with the body in JSON format as following [required JTWs token]:
```
{
  "user_id":1
}
```
**Get complete order from user id:** send GET request to app.get http://localhost:8080/dashboard/orders/complete/:user_id with the body in JSON format as following [required JTWs token]:
```
{
  "user_id":1
}
```
