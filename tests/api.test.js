const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

test('GET /health responde 200', async () => {
  const server = app.listen(0);
  const port = server.address().port;
  const res = await fetch('http://localhost:' + port + '/health');
  assert.strictEqual(res.status, 200);
  server.close();
});
