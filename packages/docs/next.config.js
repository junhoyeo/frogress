const withSvgr = require('next-plugin-svgr')

module.exports = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
})
