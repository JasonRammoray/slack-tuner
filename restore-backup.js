const fs = require('fs');
const constants = require('./constants');

function restoreBackup() {
    const original = constants.APP_ARCHIVE_PATH;
    const backup = constants.BACKUP_ARCHIVE_PATH;
    fs.copyFileSync(backup, original);
    console.log(`Restored the original archive ${original} from ${backup}`);
}

restoreBackup();
