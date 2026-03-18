/**
 * @fileOverview A minimal Node.js HTTP server that listens on localhost and responds
 * to all incoming requests with a plain-text 'Hello, World!' greeting.
 * @module server
 * @requires http Node.js built-in HTTP module
 * @author hxu
 * @version 1.0.0
 * @license MIT
 */

// Import the built-in Node.js HTTP module to create the server (CommonJS require — no external npm packages needed)
const http = require('http');

/**
 * @constant {string} hostname
 * @description The IP address the server binds to. Set to '127.0.0.1' (localhost),
 * meaning the server only accepts connections from the local machine.
 * @default '127.0.0.1'
 */
// Restrict the server to localhost — it will not be accessible from external machines
const hostname = '127.0.0.1';
/**
 * @constant {number} port
 * @description The TCP port number the server listens on.
 * @default 3000
 */
// The port clients use to connect to the server (e.g., http://127.0.0.1:3000)
const port = 3000;

/**
 * @description Creates an HTTP server that handles all incoming requests.
 * The request handler callback responds to every request with a 200 OK status,
 * a plain-text content type, and a 'Hello, World!' message body.
 * @param {http.IncomingMessage} req - The incoming HTTP request object
 * @param {http.ServerResponse} res - The HTTP response object used to send data back to the client
 */
const server = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK) indicating a successful request
  res.statusCode = 200;
  // Set the Content-Type header to indicate the response body is plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body and signal that the response is complete
  res.end('Hello, World!\n');
});

/**
 * @description Starts the HTTP server, binding it to the specified hostname and port.
 * Once the server is ready to accept connections, the callback logs the server URL to the console.
 * @param {number} port - The port number to listen on
 * @param {string} hostname - The hostname/IP address to bind to
 * @param {Function} callback - Called when the server starts listening
 */
server.listen(port, hostname, () => {
  // Log the server URL to the console to confirm the server is running
  console.log(`Server running at http://${hostname}:${port}/`);
});
