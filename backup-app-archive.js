const fs = require('fs');
const constants = require('./constants');

function backupAppArchive() {
    const original = constants.APP_ARCHIVE_PATH;
    const backup = constants.BACKUP_ARCHIVE_PATH;
    fs.copyFileSync(original, backup);
    console.log(`Copied ${original} to ${backup}`);
}

module.exports = backupAppArchive;
