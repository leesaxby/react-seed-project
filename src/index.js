import React from 'react';
import ReactDOM from 'react-dom';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import CssBaseline from '@material-ui/core/CssBaseline';
import { addLocaleData, IntlProvider } from 'react-intl';
import { AppContainer } from 'react-hot-loader';
import { getMessages, DEFAULT_LOCALE } from '../i18n';
import App from './App';
import APP_THEME from './theme.css';

const USER_LOCALE = navigator.language;

// Add locales
addLocaleData([...en, ...de]);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <IntlProvider
                defaultLocale={DEFAULT_LOCALE}
                locale={USER_LOCALE}
                messages={getMessages(USER_LOCALE)}>
                <CssBaseline>
                    <Component />
                </CssBaseline>
            </IntlProvider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

// global process
if (process.env.NODE_ENV !== 'production') {
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
    // global module
    if (module.hot) {
        module.hot.accept('./App', () => { render(App); });
    }
}
