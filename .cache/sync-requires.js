const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/geoff/Bureau/GatsbyVapo_2019/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/geoff/Bureau/GatsbyVapo_2019/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/geoff/Bureau/GatsbyVapo_2019/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/geoff/Bureau/GatsbyVapo_2019/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/geoff/Bureau/GatsbyVapo_2019/src/pages/index.js")))
}

