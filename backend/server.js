const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock API usage data
let apiUsageData = [
  { endpoint: "/api/payments", calls: 10 },
  { endpoint: "/api/users", calls: 5 },
];

// Endpoint to fetch API usage data
app.get("/api/usage", (req, res) => {
  res.json(apiUsageData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});