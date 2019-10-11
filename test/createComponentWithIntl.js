import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import de from '../i18n/translations/de';
import en from '../i18n/translations/en-GB';

const createComponentWithIntl = (children, props = { locale: 'en' }) => {
    const messages = props.locale === 'en' ? en : de;
    return renderer.create(
        <IntlProvider {...props} messages={messages}>
            {children}
        </IntlProvider>,
    ).toJSON();
};

export default createComponentWithIntl;
