var App = {};
App.config = {
    debug: true,
    getPopupInfo: {
        url: 'https://russiangram.com/api/GetPopUpInfo.aspx',
        timeout: 60 * 1000,
    },
    declensionTable: {
        url: 'https://api.russiangram.com/lemmy',
        timeout: 60 * 1000,
    },
    parsePhrase: {
        left: 100,
        right: 100,
    },
    maxPhraseLength: 5,
};