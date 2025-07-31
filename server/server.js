const express = require('express');
const app = express();
const PORT = 3033;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server! - change deploy path - ci.yml directory' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
