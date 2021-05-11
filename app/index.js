const app = require('express')();
const { PORT = 4000, SALT = '#ha43-1', LOG_LEVEL, NODE_ENV } = process.env;
const forecast = require('../utils/forecast')
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
         origin: "http://localhost:8888",
         methods: ["GET", "POST"]

    }
});

io.on('connection', (socket) => {
    console.log("User Connected")
    socket.on("Public", (data) => {
        forecast(data, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            io.emit("weather", forecastData)
        })
    });
})

app.get('/', (req, res) => {
    res.send('Hello');
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
