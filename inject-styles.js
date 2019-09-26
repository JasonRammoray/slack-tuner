const fs = require('fs');
const backupAppArchive = require('./backup-app-archive');
const constants = require('./constants');
const {extract, packBack} = require('./archive');
const cleanUp = require('./clean-up');

const customFnName = '__inject__custom__styles__';

function generateJsSnippet(styles) {
    return `(function ${customFnName}() {
        'use strict';
        document.addEventListener('DOMContentLoaded', function() {
            var style = document.createElement('style');
            style.textContent = \`${styles}\`;
            document.body.appendChild(style);
        }); 
    })();;`;
}

async function patchStyles() {
    backupAppArchive();
    await extract();
    const customStyles = fs.readFileSync(constants.USER_INPUT_PATH).toString().trim();
    const appJs = fs.readFileSync(constants.APP_JS_BUNDLE_PATH).toString();
    const previousInjectionsRe = new RegExp(`\\(function\\s${customFnName}.*?;;`, 's');
    const modifiedAppJs = appJs
        .replace(previousInjectionsRe, '')
        .replace(
        /function\([a-z\d]+\){/,
        match => `${match}${generateJsSnippet(customStyles)}`
    );
    fs.writeFileSync(constants.APP_JS_BUNDLE_PATH, modifiedAppJs);
    await packBack();
    cleanUp();
}

patchStyles()
    .then(() => console.log('Custom styles have been successfully injected. Enjoy your new Slack UI.'))
    .catch(err => console.error(`Unable to inject custom styles. Reason: ${err.message}`));
