This is a NextJS learning project guided by [this youtube playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH)

## Setting up NextJS codebase

Create next app

```bash
npx create-next-app <next-app-name>
```

Run this to start dev server

```bash
yarn dev
```

## Understanding project folder structure

### package.json

- this file contains the dependancies of the project and the scripts required to build/start/dev/lint the project.

- dependancies

  - react and react-dom are used to build the UI
  - lint is used to check lint issues and throw error(if any exists)

- scripts

  - next dev: this srcipt runs our next js application in development mode
  - next build: this script is used to compile the application, making it ready for production deployment
  - next start: this script is used to start the compiled application in production mode.
    _(Note: We do not have start script in react cuz it only handles UI and we only need to build the project but NextJS, being a full stack application, we may have to start our server as well and this helps us to do so.)_

  - next lint: this script is used to lint all the files in the application

### next.config.js

- this is NextJS configuration file.

### .eslintrc

- this is the configuration file for eslint

### .next

- this folder gets generated when we run build/dev script
- NextJS application is served from this folder

### node_modules

- this is folder in which all the dependancies are stored
- this is generated when we run "yarn install" or "npm install"
- this can be created even when we run dev script if we haven't already installed yarn/npm.
  It internally installs dependencies if not present.

### public

- this folder holdsall the public resources used in the application
- icons/images/svgs etc

### pages

- this folder alone is responsible for entire routing feature of the application
- index.js: file will be served in browser in localhost:3000
- \_app.js: we can define thr layout of our application in this file
- api folder: is the folder where we create APIs for the application

#### Execution flow

package.json(yarn dev/npm dev) -> \_app.js -> index.js(Home component)

## Routing

### Routing in REACT

- install a third party application
- routes.js file to configure the routes
- for each route, create a component file, export the component, import it in routes.js and configure new routse with _path_ property

### NEXTJS approach to simplifying routing

- file-system based routing mechanism
- when a file is added in **pages folder**, it automatically becomes available as a route
- by mixing and matching names with nested folder structure, it is possible to pretty much define most common routing patterns

> File name in pages folder corresponds to the route itself.

- check [productId].js file for dynamic routing.
