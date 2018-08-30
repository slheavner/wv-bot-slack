'use strict'

const Hapi = require('hapi')
const eventer = require('./eventer')

// Create a server with a host and port
const server = Hapi.server({
  host: '0.0.0.0',
  port: 8000,
})

// Add the route
server.route({
  method: 'POST',
  path: '/wvbot',
  handler: function(request) {
    const { challenge, event } = request.payload
    eventer.handle(event)
    return {
      challenge,
    }
  },
})

// Start the server
async function start() {
  try {
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', server.info.uri)
}

start()
