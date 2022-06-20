const prompts = require('prompts')
const shell = require('shelljs')
const title = require('./title')

console.log(title)

  ; (async () => {
    const response = await prompts([{
      type: 'select',
      name: 'config',
      message: 'Pick a file',
      choices: [{
        title: 'README',
        value: 'readme',
        description: 'README template',
      }, {
        title: 'Antfu\'s eslint',
        value: 'eslint',
        description: 'Antfu\'s eslint config file'
      }, {
        title: 'UnoCSS in TS',
        value: 'unocss',
        description: 'UnoCSS in TypeSCript file'
      }, {
        title: 'gitignore',
        value: 'gitignore',
        description: 'gitignore file'
      }, {
        title: 'MIT LICENSE',
        value: 'mit',
        description: 'MIT license file in 2022 @Cheng-DX'
      }]
    }])
    const { config } = response

    const { code } = shell.exec(`sh ~/df/download.sh ${config}`)
    
  })()
