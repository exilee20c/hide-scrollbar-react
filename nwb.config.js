module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: '_exl_scrollable',
      externals: {
        react: 'React'
      }
    }
  }
}
