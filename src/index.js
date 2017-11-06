import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import translations from '../i18n/translations.js';

import { App, rootReducer } from './components/app/app.jsx';

const USER_LOCALE = navigator.language;

// Add locales
addLocaleData([ ...en, ...de ]);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <IntlProvider locale={USER_LOCALE} messages={translations[USER_LOCALE]}>
                    <Component />
                </IntlProvider>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/app/app.jsx', () => { render(App); });
}
