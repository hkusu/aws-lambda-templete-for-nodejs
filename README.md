# AWS Lambda template for Node.js

This is a project template for creating an AWS Lambda application using Node.js.

## Usage

### Run locally during development

    $ npm run local
    
Modify `localRun.js` to simulate AWS events.

### Create a package

    $ npm run create-package

`app.zip` is created, so upload it in AWS Management Console.

## Assumed AWS Lambda environment

- runtime
  - Node.js 12.x
- handler
  - src/index.handler
