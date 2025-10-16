const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetched a random cat fact from the API
    const response = await axios.get("https://catfact.ninja/fact");

    // Built my own response object
    const data = {
      status: "success",
      user: {
        email: "devbyalp@gmail.com", 
        name: "Lawal Ajayi",        
        stack: "Node.js/Express",      
      },
      timestamp: new Date().toISOString(), 
      fact: response.data.fact,
    };

    // Returned JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
    });
  }
});

// Started the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
