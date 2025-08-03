const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for intern information
const internData = {
  name: "Saurav Shelke",
  referralCode: "saurav2025",
  donations: 13400
};

// Mock data for leaderboard
const leaderboardData = [
  { name: "Saurav Shelke", donations: 13400, rank: 1 },
  { name: "Priya Sharma", donations: 12800, rank: 2 },
  { name: "Rahul Kumar", donations: 11500, rank: 3 },
  { name: "Anjali Patel", donations: 10200, rank: 4 },
  { name: "Vikram Singh", donations: 8900, rank: 5 },
  { name: "Neha Gupta", donations: 7600, rank: 6 },
  { name: "Arjun Mehta", donations: 6500, rank: 7 },
  { name: "Zara Khan", donations: 5400, rank: 8 }
];

// Routes
app.get('/api/intern', (req, res) => {
  try {
    res.json(internData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/leaderboard', (req, res) => {
  try {
    res.json(leaderboardData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
}); 