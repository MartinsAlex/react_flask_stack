
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://backend:5000',
      //target: 'http://127.0.0.1:5000',
      changeOrigin: true,
    })
  )
};