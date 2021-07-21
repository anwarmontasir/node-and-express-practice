// Import Express and set up the app
const express = require('express');
const app = express();

const mainRoutes = require('./routes');
const errorHandlers = require('./errorHandlers');

// pass route handlers to app
app.use(mainRoutes);

// pass 404 and global error handlers
app.use(errorHandlers.handle404);
app.use(errorHandlers.handleGlobalError);

/*
* Helpers for Various Tasks
*/

// Helper function to reverse a string
const reverseString = (string) => [...string].reverse().join('');

// Helper function to shorten a string to fifty characters
const shortenString = (string) => {
  return string.length > 50 ? string.substring(0, 50) + "..." : string;
}

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})