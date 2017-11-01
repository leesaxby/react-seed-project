# React / Redux seed project

A seed project using [React](https://reactjs.org/) and [Redux](http://redux.js.org/) intended to provided a quick and consistent setup for new projects.

The seed contains a demo todo project which will give an idea of how to structure react apps and follows the container / presentational component structure described here: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0.

It also contains working examples of the following
* Redux
* PropTypes
* internationalisation
* Styled components

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
yarn dev
```

This will fire up a development server and should open a browser pointing to it (http://0.0.0.0:9999/).
Check below for included development features.

### Production build

To generate a production build run:

```
yarn build
```

This will generate a production build in the `/dist` directory.
Check below for production build details.


### Project features
* React
* Redux
* Prop types
* [Styled components](https://www.styled-components.com/) (May be replaced with bootstrap)

### Development features
* Webpack development server
* ES2015 transpiling
* Linting
* Source maps
* Live reload / [Hot module reload](https://webpack.js.org/concepts/hot-module-replacement/)

### Production details
* Minification
* [Tree shaking](https://webpack.js.org/guides/tree-shaking/)
