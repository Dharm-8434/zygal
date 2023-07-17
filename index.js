const express = require('express');
const bodyParser = require('body-parser');

const users = [
 { "email_id":"dharm1234@gmail.com","password":"1234"}
]

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle login request
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user in the users array
  const user = users.find(u => u.email_id === email && u.password === password);

  if (user) {
    // Redirect to homepage-2 if login successful
    res.redirect('/homepage2');
  } else {
    // Redirect to page-1 if login failed
    res.redirect('/');
  }
});

// Serve page-2
app.get('/homepage2', (req, res) => {
  res.sendFile(__dirname + '/homepage2.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
