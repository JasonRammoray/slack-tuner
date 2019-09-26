const {EXTRACT_PATH} = require('./constants');
const rimraf = require('rimraf');
const constants = require('./constants');

function cleanUp() {
    rimraf.sync(EXTRACT_PATH);
    console.log(`Removed extract folder ${constants.EXTRACT_PATH}`);
}

module.exports = cleanUp;
