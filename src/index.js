const express = require('express')
const cors = require('cors')
const { PORT } = require('./config/server.config');
const { connectToDB } = require('./config/db.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const { ProblemListRepository } = require('./repositories');

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

app.get("/ping", (req, res) => {
    res.json({ status: "live", message: "server is running" })
})

app.use("/api", apiRouter)


app.use(errorHandler);

app.listen(PORT, async () => {
    await connectToDB();
    console.log(`Server started at ${PORT} and connected to database`);
});