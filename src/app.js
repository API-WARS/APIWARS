const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/v1/items', (req, res) => res.json([]));

module.exports = app;
