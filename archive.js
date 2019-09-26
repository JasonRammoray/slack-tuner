const asar = require('asar');
const {APP_ARCHIVE_PATH, EXTRACT_PATH} = require('./constants');

async function extract() {
    await asar.extractAll(APP_ARCHIVE_PATH, EXTRACT_PATH);
    console.log(`Extracted app resources into ${EXTRACT_PATH}`);
}

async function packBack() {
    await asar.createPackage(EXTRACT_PATH, APP_ARCHIVE_PATH);
    console.log(`Packed ${EXTRACT_PATH} back into ${APP_ARCHIVE_PATH}`);
}

module.exports = {
    extract,
    packBack
};
