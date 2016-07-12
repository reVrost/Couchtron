
const {app} = require('electron')
const {BrowserWindow} = require('electron')

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1360, height: 800});
    mainWindow.loadURL('file://${__dirname}/index.html');
    
    //mainWindow.openDevTools();
    
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

