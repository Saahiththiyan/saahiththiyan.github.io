// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")
const postcssNesting = require('postcss-nesting')

module.exports = {
  siteName: 'Saahi',
  siteUrl: 'https://saahiththiyan.github.io',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-184199619-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Project'
      }
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          postcssNesting
        ],
      },
    },
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
}
