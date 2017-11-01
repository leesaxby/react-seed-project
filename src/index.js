
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { App, rootReducer } from './components/app/app.jsx';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const render = Component => {
    ReactDOM.render(
      <AppContainer>
          <Provider store={store}>
            <Component />
          </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/app/app.jsx', () => { render(App); });
}
