const {getSlackResourcesPath} = require('./utils');
const path = require('path');
const projectName = require('./package').name;

const SLACK_RESOURCES = getSlackResourcesPath();
const EXTRACT_FOLDER_NAME = `${projectName}-app-archive`;
const EXTRACT_PATH = path.join(SLACK_RESOURCES, EXTRACT_FOLDER_NAME);
const APP_JS_BUNDLE_PATH = path.join(EXTRACT_PATH, 'dist', 'ssb-interop.bundle.js');
const ARCHIVE_NAME = 'app';
const ARCHIVE_EXT = 'asar';
const APP_ARCHIVE = `${ARCHIVE_NAME}.${ARCHIVE_EXT}`;
const APP_ARCHIVE_PATH = path.join(SLACK_RESOURCES, APP_ARCHIVE);
const BACKUP_ARCHIVE_PATH = path.join(SLACK_RESOURCES, `${APP_ARCHIVE}-BACKUP`);
const USER_INPUT_PATH = path.join(__dirname, 'user-input');

module.exports = Object.freeze({
    SLACK_RESOURCES,
    EXTRACT_FOLDER_NAME,
    EXTRACT_PATH,
    APP_ARCHIVE_PATH,
    BACKUP_ARCHIVE_PATH,
    USER_INPUT_PATH,
    APP_JS_BUNDLE_PATH,
    PROJECT_NAME: projectName
});
