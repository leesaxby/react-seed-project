import en_GB from './translations/en-GB.json';
import de from './translations/de.json';

const DEFAULT_LOCALE = 'en-GB';

// @todo Use the babel-plugin-react-intl plugin to generate the default
// translations from those in components/modules
const translations = {
    'en-GB': en_GB,
    de,
};

const isAvailable = (locale) => Boolean(translations[locale]);
const getMessages = (locale) => isAvailable(locale)
    ? translations[locale]
    : translations[DEFAULT_LOCALE];

export { isAvailable, getMessages, DEFAULT_LOCALE };
