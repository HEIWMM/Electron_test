const { Menu,remote } = require('electron')

var rightMenu = [
  {
    label: '复制',
  },
  {
    label: '粘贴',
  },
]
var rm = remote.Menu.buildFromTemplate(rightMenu)

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  rm.popup({
    //window: remote.getCurrentWindow()
  })
})