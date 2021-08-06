# Create React Project with Typescript

- npx create-react-app <project_name> --template typescript
  Note : 1. if create-react-app not found use : npm install -g create-react-app

# Handle Multiple Environment

Package Required : Using Yarn - yarn add env-cmd
Using NPM - npm install env-cmd
Ex : Suppose we have 3 environment - prod,qa,dev

- 1. update scripts in package.json , add these 5 lines in package.json to scripts

  "start": "env-cmd -f .env.dev react-scripts start",
  "build": "env-cmd -f .env.dev react-scripts build",
  "start-prod": "env-cmd -f .env.prod react-scripts start",
  "build-prod": "env-cmd -f .env.prod react-scripts build",
  "start-qa": "env-cmd -f .env.qa react-scripts start",
  "build-qa": "env-cmd -f .env.qa react-scripts build",

- 2. create 3 files respective to environment : .env.dev ,.env.prod, env.qa

Note : - Create all variables in environment using REACT_APP prefix so you can access by process.env - Here in place of NODE_ENV , use REACT_APP_ENV for checking environment

# Naming Convention (Strictly should be follow)

- file Extension : TypeScript Project - If Has react component then .tsx , or general purpose file .ts
  Javascript Project - If Has react component then .jsx , or general purpose file .js  
   For Style file - SCSS used , then .scss - basic css , then .css - or you can use .js or .ts file if you are not using above file respective of  
   project(typescript-.ts , js-.js)

- folder name = ex: babel-eslint , custom-modal, input-box, navigation, redux ,reducers
- file name = For Component - PascalCase only (ALL file which one is .jsx or .tsx extension so we can identify which  
   one is component file )
  For GeneralFile - common-handler.js , common-handler.ts , handler.js , handler.ts
- component name (PascalCase only) ex : CustomModal , Modal , TextInput
- function name (camelCase only) ex : getDate , generateUrl , fetchName , success
- Constants name (UpperCase only) ex : GET_DATE , DATE, SUCCESS
- Interface file (Typescript Project only) : index.d.ts , common.d.ts, common-handler.d.ts
- Interface Naming : (PascalCase only) - if Interface = ICommon
  if type : TCommon
  Note : 1. Interface Naming will be same as the component name
  case A : in single component interface writing (ex : CustomModal is our component)
  folderName : custom-modal
  fileName : CustomModal
  ComponentName : CustomModal
  Interface file name : custom-modal.d.ts
  Interface for Props : ICustomModalProps
  Type for Props : TCustomModalProps

# Folder Structure
