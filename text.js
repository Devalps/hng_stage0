const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

// Function to fetch a random cat fact
const getCatFact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    return response.data.fact;
  } catch (error) {
    return "Could not fetch a cat fact at this time.";
  }
};

// Root route
app.get("/", (req, res) => {
  res.send("Welcome! Use the /me endpoint to see your profile and a cat fact.");
});

// GET /me endpoint
app.get("/me", async (req, res) => {
  const fact = await getCatFact();
  res.json({
    status: "success",
    user: {
      email: "devbyalp@gmail.com",
      name: "Lawal Ajayi",
      stack: "Node.js/Express"
    },
    timestamp: new Date().toISOString(),
    fact
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
