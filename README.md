# Storefront
[![CircleCI](https://circleci.com/gh/gene20898/Storefront/tree/master.svg?style=svg)](https://circleci.com/gh/gene20898/Storefront/tree/master)

Storefront is a simple e-commerce website built with Angular, Node.js and Postgres. It provided API endpoints with a full CRUD operation, which each of them are secured with the simple authenication and encryption. It also implemented some basic CI/CD with CircleCI.

This project is created as a final project for Udacity Fullstack Javascript Developer nanodegree.

## Link for the website
http://udacity-project-gene-s3.s3-website-ap-southeast-1.amazonaws.com

## Installation

Clone the project
```bash
git clone https://github.com/gene20898/Storefront.git
```
### Running Storefront API
Go to the project directory
```bash
cd store_backend
```
Install dependencies
```bash
npm install
```
Start the project
```bash
npm run dev
```
### Start the project
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
npm start
```
## Project Architecture
![Storefront Architecture](https://user-images.githubusercontent.com/39151382/132994233-06cd9f95-4495-41f5-a1ae-57f7aa738bc6.jpg)

This project is hosted on AWS cloud. 
- Amazon RDS is used for hosting postgres database.
- APIs and backend logic part is hosted on Elastic Beanstalk.
- Angular frontend is hosted as a static page with Amazon S3.

### Here are some configurations on AWS
Amazon RDS
![rds](https://user-images.githubusercontent.com/39151382/132993973-df36376c-8667-4036-a718-27dc78b12e8b.png)

Elastic Beanstalk
![eb](https://user-images.githubusercontent.com/39151382/132993994-f1f5da2d-9bf5-4ba4-af9a-fdffbc5e753b.png)

Amazon S3 Bucket
![s3](https://user-images.githubusercontent.com/39151382/132994001-0bb9f632-d5b0-4f3a-91fa-1b4d6da1ca82.png)

S3 Bucket static website hosting configuration
![s3-web](https://user-images.githubusercontent.com/39151382/132994018-71c97d25-eca9-4f33-bb8b-c84ab739f6d9.png)

S3 Bucket permission
![s3-permission](https://user-images.githubusercontent.com/39151382/132994023-640d4461-b0eb-4417-87ea-5166360bd6bf.png)

S3c Bucket policy
![s3-policy](https://user-images.githubusercontent.com/39151382/132994034-c17ea058-328f-465b-835e-8fb9285d2ef4.png)

S3 Bucket CORS configuration
![s3-cors](https://user-images.githubusercontent.com/39151382/132994036-b8a03f85-4ba7-4b3c-a5e3-cfbe47fdcc23.png)

### Screenshot of last build in CircleCi
![circleci1](https://user-images.githubusercontent.com/39151382/132994242-55740297-fbf7-4376-9332-02e3bce9d563.png)
![circleci2](https://user-images.githubusercontent.com/39151382/132994243-22def9c3-eff1-432f-8134-f8c5575ab2f0.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)
