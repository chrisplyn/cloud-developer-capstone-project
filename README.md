# Udacity Cloud Developer Capstone Project

This project is an extension of the Serverless project, which implements a simple TODO application using AWS Lambda and Serverless framework. 

# Functionality of the application

This application will allow creating/removing/updating/fetching TODO items. Each TODO item can optionally have an attachment image. Each user only has access to TODO items that he/she has created.


# Extension of previous project

## Frontend deployment
A `serverless.yml` file has been added to the frontend project, which uses `serverless-s3-sync` plugin to depoly the frontend website to a AWS S3 bucket.

## Continuous deployment
A `travis.yml` file has been added to the project which streamlines the deployment of both frontend and backend services.
![Alt text](travis.png?raw=true "deployment result")


## Realtime email notification for image upload
Every time a user is authenticated, an email will be sent to the user asking the user to confirm subscription to the image bucket SNS topic, once the user confirmed, an notification email will be sent to the user every time the user uploads an image to the bucket.
![Alt text](sns.png?raw=true "deployment result")

## Best practices
Individual packaging has been used for all lambda functions to reduce package size.


# How to run the application
Website endpoint `http://udacity-capstone-frontend-s3-bucket.s3-website-us-east-1.amazonaws.com`.

