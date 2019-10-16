# React / Redux seed project

A seed project using [React](https://reactjs.org/) intended to provided a quick and consistent setup for new projects.

It contains working examples of the following
* PropTypes
* Internationalisation
* Accessibility
* Material-UI
* Theming
* e2e tests
* Unit tests
* Snapshot tests
* Routing

To remove the todo demo just delete the `src/components/todos` directory and the corresponding imports in `src/components/app/App.js`

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

### Translation files

The keys for the translations are generated using Webpack and babel.
They will be extracted from: `defineMessages()`, `<FormattedMessage>`, and `<FormattedHTMLMessage>`

> **NOTE**
> They will not be extracted from `intl.formattedMessage()`.
> Any translations that are used this way will need to be set in a `defineMessages()`

Translations should use a namespace of `ComponentName.someTranslation`

Running the `yarn gen-translation` command does two things. It will do a build using Webpack setting the `NODE_ENV` so babel knows to extract the translations into the messages files. Once that is finished it will run a node script to add all the messages to the GB translation file with the default messages. The script will then make all the other translation files using the same key.

When the script is re-run the new keys are added and the default translations will be replaced if updated. The translated files keys will be updated but not the translations themselves once they have been overwritten.

When the script is run it will show in the console any translations that have  duplicate keys and items that are missing a translation. There may be things that don't need translating like acronyms. These can be added to the whitelist file using the translation key

```
[
    'Component.translation'
]
```

### Testing
#### Examples of what/where to test

Comming soon!!!

### Project features
* React
* Prop types
* Material-ui
* App theming
* Internationalisation
* Accessibility
* Routing

### Development features
* Webpack development server
* ES2015 transpiling
* Linting
* Source maps
* Live reload / [Hot module reload](https://webpack.js.org/concepts/hot-module-replacement/)
* e2e tests
* Unit tests
* Snapshot tests
* [Wallaby](https://wallabyjs.com/)

### Production details
* Minification
* [Tree shaking](https://webpack.js.org/guides/tree-shaking/)

## Continuous Integration

This project supports Jenkins out of the box with a Jenkins pipeline provided to invoke the Yarn `install`, `lint`, `unit`, and `e2e` tasks.

The `Jenkinsfile` is written in [declarative pipeline](https://jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline) style and is easily extensible. It uses the `mhart/alpine-node` docker image to setup a NodeJS & Yarn environment with no extra requirements from Jenkins.

To configure Jenkins to track this project:

1. Create a new "Multibranch Pipeline" Jenkins job to track this repository
2. If you are hosting on GitHub, you will need to enable a webhook from GitHub to Jenkins to notify when there are new commits. Consult the GitHub documentation for instructions.

## Related Reading
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0.
https://kentcdodds.com/blog/introducing-the-react-testing-library
