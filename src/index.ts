import app from './app'
import config from './config'

app.listen(config.prod.PORT, () => {
    console.log(`server started at http://localhost:${config.prod.PORT}`);
});
