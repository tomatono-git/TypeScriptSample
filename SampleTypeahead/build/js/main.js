///<reference path="../../typings/index.d.ts"/>
// const {app, BrowserWindow} = require('electron');
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
// const path = require('path');
// const url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null;
function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({ width: 800, height: 600 });
    let filePath = path.join(__dirname, 'index.html');
    // let parsedPath: path.ParsedPath = {
    //   root: '',
    //   dir: __dirname,
    //   base: 'index.html',
    //   name: 'index',
    //   ext: '.html'
    // };
    // TODO urlの記述は要確認
    let url = `file://${__dirname}/'index.html'`;
    // and load the index.html of the app.
    win.loadURL(url);
    // win.loadURL(url.format({
    //   pathname: path.join(__dirname, 'index.html'),
    //   protocol: 'file:',
    //   slashes: true
    // }))
    // Open the DevTools.
    win.webContents.openDevTools();
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// import app = require('electron');
// import BrowserWindow = require('browser-window');
// require('crash-reporter').start();
// // メインウィンドウの参照をグローバルに持っておく。
// var mainWindow: GitHubElectron.BrowserWindow = null;
// // すべてのウィンドウが閉じられた際の動作
// app.on('window-all-closed', function() {
//   // OS X では、ウィンドウを閉じても一般的にアプリ終了はしないので除外。
//   if (process.platform != 'darwin') {
//     app.quit();
//   }
// });
// a
// app.on('ready', function() {
//   // 新規ウィンドウ作成
//   mainWindow = new BrowserWindow({ width: 800, height: 600 });
//   // index.htmlを開く
//   mainWindow.loadUrl('file://' + __dirname + '/index.html');
//   // ウィンドウが閉じられたら、ウィンドウへの参照を破棄する。
//   mainWindow.on('closed', function() {
//     mainWindow = null;
//   });
// });:
//# sourceMappingURL=main.js.map