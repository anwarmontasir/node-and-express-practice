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

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})