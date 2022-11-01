const { app, BrowserWindow, Menu, ipcMain, MenuItem, dialog } = require('electron');

let win;

async function createMainWindow () {
  
  
    win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        
      }
    })
    setMainMenu(win) 
    win.loadFile('index.html')
    //win.webContents.openDevTools()
   
    
    
  }

  function setMainMenu(windowIn) {
  
  
  
    const template = [
      {
        label: 'File',
        submenu: [
          {
            label: 'Print',
            accelerator: 'CmdOrCtrl+P',
            click() {
              
               windowIn.webContents.print((success,failure) => {
                
           
               }); 
            }
          }
        ]
      }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  }

  app.whenReady().then(createMainWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
    
    
  }
})
