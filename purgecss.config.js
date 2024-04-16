// purgecss.config.js
import purgeJs from 'purgecss-from-js'
import purgeHtml from 'purgecss-from-html'

const options = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  css: ['./src/pages/**/*.{css}'],
  extractors: [
    {
      extractor: purgeJs,
      extensions: ['js']
    },
    {
      extractor: purgeHtml,
      extensions: ['html']
    }
  ]
}
export default options

module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  css: ['./src/pages/**/*.{css}'],
  variables: true,
  safelist: ['random', 'button', /red$/, /^bg/]
}
