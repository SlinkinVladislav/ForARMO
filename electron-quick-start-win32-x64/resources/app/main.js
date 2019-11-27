const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true
    }
  });
  var subpy = require('child_process').spawn('python', ['APMO.py']);

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
    subpy.kill('SIGINT');
  });

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});


function GetDataFromHost(){
  $.get("http://127.0.0.1:8080", function( data ) {
    alert(data);
  });
};
