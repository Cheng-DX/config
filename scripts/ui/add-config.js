const prompts = require('prompts')
const shell = require('shelljs')
const title = require('./title')
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));

const BASE_URL = 'https://raw.githubusercontent.com/Cheng-DX/config/main'
const OPTIONS_FILENAME = 'options.json'

console.log(title)

async function init() {
  try {
    const fileContent = await fetch(`${BASE_URL}/${OPTIONS_FILENAME}`)
    const choices = JSON.parse(await fileContent.text())

    const { config } = await prompts({
      type: 'multiselect',
      name: 'config',
      message: 'Pick a file',
      choices
    })
    const {
      filename,
      packages = [],
      packageManager = 'npm',
      handler,
      rename = filename
    } = config

    const { code } = shell.exec(`curl -o ${rename} ${BASE_URL}/configs/${filename}`)
    console.log('result:', code)

    const wantedPackages = await prompts({
      type: 'confirm',
      name: 'isInstall',
      message: 'Install the required packages?',
      initial: true
    })
    const { isInstall } = wantedPackages
    if (isInstall && packages.length) {
      packages.forEach(package => {
        shell.exec(`${packageManager} install ${package}`)
      })
    }
    if (handler) {
      console.log('TODO')
    }
  } catch (e) {
    throw new Error(`It seem there is an error, check your network or open an issue on GitHub.
    Error log:
    ${e}`)
  }
}

init()