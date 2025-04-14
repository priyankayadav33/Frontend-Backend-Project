const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
app.use('/api/blogs', blogRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
