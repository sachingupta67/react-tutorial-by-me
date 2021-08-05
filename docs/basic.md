# Create React Project with Typescript 
- npx create-react-app <project_name> --template typescript
Note : 
     1. if create-react-app not found use : npm install -g create-react-app

# Handle Multiple Environment
Package Required : Using Yarn - yarn add env-cmd
                   Using NPM  - npm install env-cmd
Ex : Suppose we have 3 environment - prod,qa,dev 


- 1. update scripts in package.json , add these 5 files in package.json to scripts

    "start": "env-cmd -f .env.dev react-scripts start",
    "build": "env-cmd -f .env.dev react-scripts build",
    "start-prod": "env-cmd -f .env.prod react-scripts start",
    "build-prod": "env-cmd -f .env.prod react-scripts build",
    "start-qa": "env-cmd -f .env.qa react-scripts start",
    "build-qa": "env-cmd -f .env.qa react-scripts build",

- 2. create 3 files respective to environment : .env.dev ,.env.prod, env.qa  

Note  : 
     - Create all variables in environment using REACT_APP prefix so you can access by process.env
     - Here in place of NODE_ENV , user REACT_APP_ENV for checking environment
    