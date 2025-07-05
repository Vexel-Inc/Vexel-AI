class main_menu {
    constructor () {
        const { Menu, shell} = require('electron');
        let template = [
           {
               label: 'File',
               submenu: [
                   {
                       label: 'New Window',
                       click: () => {
                        window.open('index.html');
                     }
                   },
                   {
                       label: 'Zoom',
                       role: 'zoom'
                   },
                   {
                       label: 'Minimixe',
                       role: 'minimize'
                   },
                   {
                       label: 'Close',
                       role: 'quit'
                   }
               ]
           },
           {
               label: 'Edit',
               submenu: [
                  {
                      label: 'Undo',
                      role: 'undo'
                  },
                  {
                      label: 'Redo',
                      role: 'redo'
                  },
                  {
                      label: 'Cut',
                      role: 'cut'
                  },
                  {
                      label: 'Copy',
                      role: 'copy'
                  },
                  {
                      label: 'Paste',
                      role: 'paste'
                  },
               ],
           },
           {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    role: 'reload'
                },
                {
                    label: 'Force Reload',
                    role: 'forceReload'
                },
                {
                    label: 'Toggle Dev Tools',
                    role: 'toggleDevTools',
                },
                {
                    label: 'Toggle Full Screen',
                    role: 'togglefullscreen'
                },
                {
                    label: 'Zoom In',
                    role: 'zoomIn'
                },
                {
                    label: 'Zoom Out',
                    role: 'zoomOut',
                },
                {
                    label: 'Reset Zoom',
                    role: 'resetZoom'
                },
            ]
        },
           {
               label: 'Help',
               submenu: [
                {
                    label: 'View Help',
                    click: () => {
                       const { shell } = require('electron');
                       shell.openPath('HELP.md');
                   }
                },
                {
                    label: 'View Keyboard Shortcuts',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox({
                            type: 'info',
                            buttons: [
                                'OK',
                                'Cancel'
                            ],
                            title: 'Calculator Keyboard Shortcuts',
                            message: 'All Calculator Keyboard Shortcuts',
                            menuBarVisible: true,
                            detail: 'All Keyboard Shortcuts In Main Menu',
                            isResizable: true,
                            setBounds: true,
                            textWidth: 10,
                        })
                   }
                },
                {
                    label: 'Visit Our Website',
                    click: () => {
                      const { shell } = require('electron');
                      shell.openExternal('https://electronjs.org');
                   }
                },
                {
                    label: 'Check For Updates',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox({
                            type: 'info',
                            buttons: [
                                'OK',
                                'Cancel'
                            ],
                            title: 'Calculator Updates Window',
                            message: 'Calculator Updates Center',
                            detail: 'No New Updates For Check',
                            setBounds: true,
                            textWidth: 10,
                        })
                   }
                },
                {
                    label: 'About Calculator',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox({
                            type: 'info',
                            buttons: [
                                'OK',
                                'Cancel'
                            ],
                            title: 'About Calculator',
                            message: 'Modern Maths Calculator',
                            detail: 'Version 1.1.0 2025 Free Edition x64-bit (User Setup)',
                            textWidth: 10,
                            noLink: true,
                            icon: 'Images/Logo.ico',
                            resizable: true,
                        })
                     }
                }
             ],
           }
        ]
        let menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu)
    }
}

module.exports = { main_menu };