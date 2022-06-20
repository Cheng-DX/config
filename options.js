const options = [{
  title: 'README',
  value: {
    filename: 'READMETemplate.md',
    rename: 'README.md'
  }
}, {
  title: 'Antfu\'s eslint',
  value: {
    filename: '.eslintrc',
    packages: ['eslint', '@antfu/eslint-config'],
  },
  description: 'Antfu\'s eslint config file',
}, {
  title: 'UnoCSS in TS',
  value: {
    filename: 'uno.config.ts',
    packages: ['unocss', '@unocss/preset-icons', '@iconify-json/carbon']
  },
  description: 'UnoCSS in TypeScript file',
}, {
  title: 'gitignore',
  value: {
    filename: '.gitignore',
  }
}, {
  title: 'MIT LICENSE',
  value: {
    filename: 'LICENSE',
  },
  description: 'MIT license file in 2022 @Cheng-DX'
}]

module.exports = options