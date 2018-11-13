const manageTranslations = require('react-intl-translations-manager').default;

const {
    readMessageFiles,
    createSingleMessagesFile,
    getDefaultMessages,
} = require('react-intl-translations-manager');

const inputMessagesDirectory = './i18n/messages/';
const outputMessagesDirectory = './i18n/translations';

const extractedMessages = readMessageFiles(inputMessagesDirectory);

createSingleMessagesFile({
    messages: getDefaultMessages(extractedMessages).messages,
    directory: outputMessagesDirectory,
    fileName: 'en-GB.json',
});

manageTranslations({
    messagesDirectory: inputMessagesDirectory,
    translationsDirectory: outputMessagesDirectory,
    defaultMessagesLanguage: 'en-GB',
    languages: ['de'],
});
