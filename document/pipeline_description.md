# Pipeline Description
This project's repository is monitored my CircleCI, such that it executes series of event every time when the commited code is pushed to this repository.

The series of event in CircleCI pipeline are:
* Setting up Docker container
* Prepare enviroment variables
* Install NodeJs
* Checkout code
* Install and setup AWS CLI
* Pass enviroment variable and secret tokens to AWS
* Install store_frontend dependencies
* Install store_backend dependencies
* Build store_frontend
* Build store_backend
* Deploy store_frontend on Amazon S3
* Deplot store_backend on Elastic Beanstalk

## Pipeline Diagram
![pipeline_diagram](https://user-images.githubusercontent.com/39151382/133916701-405ca329-5bd4-44d8-9776-1a01e029d383.jpg)



