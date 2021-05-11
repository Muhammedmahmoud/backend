const app = require('express')();
const { PORT = 4000, SALT = '#ha43-1', LOG_LEVEL, NODE_ENV } = process.env;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
