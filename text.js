const express = require("express");
const app = express();

// Use the port Render provides, fallback to 3000 locally
const PORT = process.env.PORT || 3000;

// Example route
app.get("/", (req, res) => {
  res.send("Hello from Render!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
