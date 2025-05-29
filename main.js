const { app, BrowserWindow, ipcMain } = require('electron')

const mysql = require('mysql2/promise')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: __dirname + '/preload.js',
      contextIsolation: true,

    }
  })

  win.loadFile('pages/index.html')
}

async function conexaoComBanco() {

  var conexao = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'electron_db'
  })

  return conexao

}

ipcMain.handle('criar-usuario', async function (evento, nome, email) {
  var conexao = await conexaoComBanco()

  var criarUsuarioSQL = 'INSERT INTO usuarios(nome, email) VALUES(?, ?)'

  var resultado = await conexao.execute(criarUsuarioSQL, [nome, email])

  console.log('resultado', resultado)
})

app.whenReady().then(() => {
  createWindow()
})