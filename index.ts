import { init } from './src/presentation/http/hapi/hapi'
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();