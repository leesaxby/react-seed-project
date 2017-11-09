# React / Redux seed project

A seed project using [React](https://reactjs.org/) and [Redux](http://redux.js.org/) intended to provided a quick and consistent setup for new projects.

The seed contains a demo todo project which will give an idea of how to structure react apps and follows the container / presentational component structure described here: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0.

It also contains working examples of the following
* Redux
* PropTypes
* Internationalisation
* Styled components
* e2e tests
* Unit tests
* Routing

To remove the todo demo just delete the `src/components/todos` directory and the corresponding imports in `src/components/app/app.jsx`

### Setup

The project will require [Node](https://nodejs.org/en/) and the package manager [Yarn](https://yarnpkg.com/lang/en/docs/install/).

Once Node and Yarn are setup we can then install the project dependencies by running:

```
yarn install
```

### Running development server

To start a webpack development server run:

```
yarn dev-server
```

This will fire up a development server at (http://localhost:9999/).
Check below for included development features.

### Production build

To generate a production build run:

```
yarn prod-build
```

This will generate a production build in the `/dist` directory.
Check below for production build details.

### Run e2e tests

e2e tests are located in the `./test` directory.
To run these tests enter:

```
yarn e2e
```

This will generate a production build and fire up a webpack dev server to run the UI.
The e2e tests will then run against the server.

### Run unit tests

Unit tests are located in the corresponding component directories.
To run all unit tests enter:

```
yarn unit
```

### Project features
* React
* Redux
* Prop types
* [Styled components](https://www.styled-components.com/) (May be replaced with bootstrap)
* Internationalisation
* Routing

### Development features
* Webpack development server
* ES2015 transpiling
* Linting
* Source maps
* Live reload / [Hot module reload](https://webpack.js.org/concepts/hot-module-replacement/)
* e2e tests
* Unit tests

### Production details
* Minification
* [Tree shaking](https://webpack.js.org/guides/tree-shaking/)
