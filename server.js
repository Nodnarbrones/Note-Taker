const express = require('express');
const path = require('path');
const viewRoutes = require('./Routing/views');
const cRoutes = require('./Routing/controlers');
const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/',cRoutes);
app.use('/',viewRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
