const express = require('express');
const { ProblemController } = require('../../controllers');
const problemRouter = require('./problems.routes');
const router = express.Router();

router.get("/ping", (req, res) => {
    res.send("v1 is live");
})

router.use('/problems', problemRouter)



module.exports = router