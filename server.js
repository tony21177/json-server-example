// server.js
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()


const rewriteObj = require('./routes.json')
console.log('rewriteObj',rewriteObj)
server.use(jsonServer.rewriter(rewriteObj))

server.use(middlewares)
server.use(router)
server.listen(require('./json-server.json').port, () => {
  console.log('JSON Server is running')
})




// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
    res.jsonp({
      code:0,
      message:"",
      status:"OK",
      totoalCount : res.locals.data.length,
      data: res.locals.data
    })
  }