const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const api = require('./api')

module.exports = () => {
  const app = express()
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded(
  { extended: false }))
  app.set('trust proxy', 1) // trust first proxy

  if (app.get('env') === 'development') {
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require('./webpack.config')
    const webpack = require('webpack')
    const compiler = webpack(config)
    const livereload = require('livereload')
    const lrserver = livereload.createServer()
    lrserver.watch([
      __dirname + '/public',
      __dirname + '/src',
    ])

    app.use(require('inject-lr-script')())
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }))
  }
  // static files
  app.use('/', express.static(path.join(__dirname, 'public')))
  // routes
  app.use('/api/v1/', api.appRoute())
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })
  // error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use((err, req, res) => {
      res.status(err.status || 500)
      res.json({
        message: err.message,
        error: err,
      })
    })
  }
  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {},
    })
  })
  return app
}
