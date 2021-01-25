var electron  = require('electron')

var app = electron.app
// 引用app

var BrowserWindow = electron.BrowserWindow
// 窗口引用

var mainWindow = null
// 声明要打开的窗口

app.on('ready', ()=>{
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      // 允许node进程
      enableRemoteModule: true,
      // 允许使用多窗口模块
    },
  })
  mainWindow.webContents.openDevTools()
  require('./menu.js')
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', ()=>{
    mainWindow = null
    // 用以清空内存
  })
})