const app = require('./express-app')
const { PORT } = require('./config');

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})
.on('error', (err) => { 
    console.log(err);
    process.exit();
})
