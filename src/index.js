const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  console.log(`start listen at http://localhost:${port}`);
});
