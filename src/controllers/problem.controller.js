const {StatusCodes} = require('http-status-codes');


function pingProblemController(req, res) {
    res.status(StatusCodes.OK).json({ message: "ping controller is up" })
}

function getProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented" })
}

function getProblems(req, res) {

    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented" })
}

function addProblem(req, res) {

    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented" })
}

function updateProblem(req, res) {

    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented" })
}

function deleteProblem(req, res) {

    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented" })
}


module.exports = {
    pingProblemController,
    getProblem,
    getProblems,
    addProblem,
    updateProblem,
    deleteProblem
}