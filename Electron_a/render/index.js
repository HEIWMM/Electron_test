var fs = require('fs')
window.onload = function () {
  let btn = this.document.querySelector('#btn')
  let content = this.document.querySelector('#content')
  btn.onclick = function () {
    fs.readFile('./content.txt', (err, data) => {
      content.innerText = data
    })
  }
  const { Menu, remote } = require('electron')

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
}
