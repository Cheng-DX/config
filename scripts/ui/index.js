const prompts = require('prompts')
const shell = require('shelljs')
const title = require('./title')
const options = require('../../options')

console.log(title)

  ; (async () => {
    const response = await prompts([{
      type: 'select',
      name: 'config',
      message: 'Pick a file',
      choices: options
    }])
    const {
      config: {
        filename,
        packages = [],
        packageManager = 'npm',
        handler,
        rename = filename
      }
    } = response

    const baseURL = 'https://raw.githubusercontent.com/Cheng-DX/config/main/configs'
    const { code } = shell.exec(`curl -o ${rename} ${baseURL}/${filename}`)
    console.log('result:', code)

    const wantedPackages = await prompts([{
      type: 'boolean',
      name: 'isInstall',
      message: 'Install the required packages?',
      initial: true
    }])
    const { isInstall } = wantedPackages
    if (isInstall && packages.length) {
      packages.forEach(package => {
        shell.exec(`${packageManager} install ${package}`)
      })
    }
    if (handler) {
      console.log('TODO')
    }
  })()