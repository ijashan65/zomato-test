const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/restaurants', (req, res) => {
  res.json([
    { name: "Burger King", rating: 4.3 },
    { name: "Pizza Hut", rating: 4.5 }
  ]);
});

app.listen(5000, () => {
  console.log("✅ Server is running on http://localhost:5000");
});
