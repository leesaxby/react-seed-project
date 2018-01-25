import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import store, { history } from './store';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import { getMessages, DEFAULT_LOCALE } from '../i18n';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';

import APP_THEME from './theme.css';

const USER_LOCALE = navigator.language;

// Add locales
addLocaleData([ ...en, ...de ]);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={USER_LOCALE} messages={getMessages(USER_LOCALE)}>
                    <ConnectedRouter history={history}>
                        <Route path='/:filter?' component={Component} />
                    </ConnectedRouter>
                </IntlProvider>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

/* global process*/
if(process.env.NODE_ENV !== 'production') {
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
    /*global module*/
    if (module.hot) {
        module.hot.accept('./App', () => { render(App); });
    }
}
