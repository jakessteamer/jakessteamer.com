const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const srcDir = path.join(__dirname, 'src/assets/images');
const destDir = path.join(__dirname, 'dist/assets/images');

// Function to copy a file
function copyFile(src, dest) {
    fs.promises.mkdir(path.dirname(dest), { recursive: true }).then(() => {
        fs.promises.copyFile(src, dest).catch(console.error);
    }).catch(console.error);
}

// Initialize watcher
const watcher = chokidar.watch(srcDir, {
    persistent: true,
    ignoreInitial: true
});

// Add event listeners
watcher
    .on('add', path => copyFile(path, path.replace(srcDir, destDir)))
    .on('change', path => copyFile(path, path.replace(srcDir, destDir)));
