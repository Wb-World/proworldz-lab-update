const app = require('./api/index');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`To start the frontend, run: npx vite`);
});
