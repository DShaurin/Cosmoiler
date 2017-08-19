let WebSocket = window.WebSocket || window.MozWebSocket

exports.connect = function (server) {
  if (!WebSocket) {
    console.log('Please use a newer browser to access collaboration features.')
  } else {
    // open connection
    let connection = new WebSocket(server)

    connection.onopen = function () {
      console.log('Connection to socket server opened.')
      // Send user, and any notes held locally so the socket server can store to distribute to future new connections
    }

/*    connection.onerror = function (error) {
      console.log('Sorry, but there\'s a problem with your connection or the server is down.')
      console.log(error)
    }*/

    setInterval(function () {
      if (connection.readyState !== 1) {
        console.log('Unable to communicate with the WebSocket server.');          
      }
    }, 3000)

    return connection
  }
}

exports.send = function (connection, message) {
  connection.send(message)
}

exports.disconnect = function (connection) {
  connection.close()
}