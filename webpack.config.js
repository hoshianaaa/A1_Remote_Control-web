const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const fs = require('fs');

const serve = new Serve({
  host: '0.0.0.0',
  port: 5000,
  static: ['./'],
  open: true,
  liveReload: false,
  https: {
    key: fs.readFileSync('/root/demoCA/private/ca.key'),
    cert: fs.readFileSync('/root/demoCA/ca.crt')
  }
});
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: ['webpack-plugin-serve/client']
  },
  plugins: [
    serve
  ],
  watch: true
};
