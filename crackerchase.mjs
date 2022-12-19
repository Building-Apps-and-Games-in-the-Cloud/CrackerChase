import express from 'express';

// Create the express application
const app = express();

// Select the middleware to decode incoming posts
app.use(express.urlencoded({ extended: false }));

// Select ejs middleware
app.set('view-engine', 'ejs');

app.use (express.static('public'));

// Connect the route handlers to the routes
//app.use('/index.html', index);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server running");
})