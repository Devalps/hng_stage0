const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors()); // enable all CORS requests
app.use(express.json());
// ✅ Home route
app.get("/", (req, res) => {
  res.send("Welcome to my API 🚀 — use /me to view profile data.");
});

// ✅ /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch random cat fact from external API
    const response = await axios.get("https://catfact.ninja/fact");

    // Create response object
    const result = {
      status: "success",
      user: {
        email: "devbyalp@gmail.com",  
        name: "Lawal Ajayi",            
        stack: "Node.js/Express",          
      },
      timestamp: new Date().toISOString(), 
      fact: response.data.fact,            
    };

    // Send JSON response
    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error fetching cat fact:", error.message);

    // Handle API failure gracefully
    res.status(500).json({
      status: "error",
      message: "Unable to fetch cat fact at the moment. Try again later.",
    });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
