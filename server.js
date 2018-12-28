import setupApp from './src/app';
import Config from './src/config/config';

setupApp()
  .then(app => app.listen(Config.PORT, () => console.log(`app running on port ${Config.PORT}`)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
