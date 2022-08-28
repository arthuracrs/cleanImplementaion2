import { app } from './src/presentation/http/express/express'
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

const port = 3000

app.listen(port, () => {
  console.log('running on ' + port)
});