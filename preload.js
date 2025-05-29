const { contextBridge, ipcRenderer } = require('electron')
console.log("preloa")
contextBridge.exposeInMainWorld('api', {
    cadastrarUsuario: (nome, email) => {
        console.log('Cadastrar usuário')

        ipcRenderer.invoke('criar-usuario', nome, email)
    }
})