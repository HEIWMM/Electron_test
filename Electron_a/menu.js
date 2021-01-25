const { Menu,remote } = require('electron')
var template = [
  {
    label: '地区',
    submenu: [{ label: '重庆' }, { label: '北京' }],
  },
]
var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)

