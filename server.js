const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dynamically load all API routes from the /api folder
const apiDir = path.join(__dirname, 'api');
if (fs.existsSync(apiDir)) {
  fs.readdirSync(apiDir).forEach(file => {
    if (file.endsWith('.js')) {
      const routePath = `/api/${file.replace('.js', '')}`;
      const routeHandler = require(path.join(apiDir, file));
      // Assuming each file exports an Express router
      app.use(routePath, routeHandler);
      console.log(`Loaded API route: ${routePath}`);
    }
  });

  // Handle auth subdirectory
  const authDir = path.join(apiDir, 'auth');
  if (fs.existsSync(authDir)) {
    fs.readdirSync(authDir).forEach(file => {
      if (file.endsWith('.js')) {
        const routePath = `/api/auth/${file.replace('.js', '')}`;
        const routeHandler = require(path.join(authDir, file));
        app.use(routePath, routeHandler);
        console.log(`Loaded API route: ${routePath}`);
      }
    });
  }
}

// Optional: Serve Vite production build
// app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`To start the frontend, run: npx vite`);
});
