require('./aliasess');
require('dotenv').config();
const app = require('./src/app');

const hostname = process.env.HOST;
const port = process.env.PORT;

app.listen(port, hostname, () => {
  console.info(`Server running on: http://${hostname}:${port}`);
});
