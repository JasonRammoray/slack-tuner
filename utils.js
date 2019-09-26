const os = require('os');
const path = require('path');

function getSlackResourcesPath() {
    const platform = os.platform();
    if (platform === 'darwin') {
        return path.join('/', 'Applications', 'Slack.app', 'Contents', 'Resources');
    }
    throw new Error(`Sorry. Your platform (${platform}) isn't supported yet`);
}

module.exports = {
    getSlackResourcesPath
};
