This project intends to be a guide for future React projects. The architecture followed here is just a suggestion and can be modified if needed. This project is a visual representation of the practices explained in [React Document Guide](https://#)

## Table of Contents

- [Features](#features)
- [Some cool stuff](#some-cool-stuff)
- [Instructions](#instructions)
- [Commands](#commands)

## Features

- React
- Redux
- Redux-sagas
- Unit test with Jest and enzyme
- E2E test with Testcafé
- Husky
- Prettier
- eslint

## Some cool stuff

- Redux devtools for browser are already installed.
- Lazy loading included.
- The project is already configured so you can just delete the stuff that you wont use and replace it with your code.
- Before every commit husky will run the eslint configuration and prettier.
- Before every push husky will run all your unit test to make sure they all pass.
- Lodash library is already installed to make your life easier.
- Nanoid is installed, very useful for setting keys in components when you dont have and id in the element.
- Axios is installed.

## Instructions

- Before deleting and files and if you are not familiar with the syntax used it is recommended for you to check how it is done.

- 1. Install Redux devtools in your browser if you dont have it already.

- 2. Delete the content of the following folders: e2e/fixtures, e2e/pages, components (not the AsyncComponent, you will need it for lazy loading), UI, utils, views.

- 3. Delete the pokemon folder inside services and replace the reducers and the sagas inside root.reducer and root.saga with your own.

- 4. In App.js remove the PokemonContainer as the render container of the root path and replace it with your own.

## Comands

### `npm install`

Installs all the dependencies of the project.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run tests`

Launches all the unit tests available in the app.

### `npm run e2e`

Launches all the e2e tests available in the app.

### `npm run pretty`

Runs pretty only in the files that have been changed since the last commit.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
