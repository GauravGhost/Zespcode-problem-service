const { StatusCodes } = require('http-status-codes');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories')

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    res.status(StatusCodes.OK).json({ message: "ping controller is up" })
}

async function getProblem(req, res, next) {
    try {
        const response = await problemService.getProblem(req.params.id);
        console.log(response);
        res.status(StatusCodes.OK).json({
            success: true,
            message: "successfully Fetch the all problem data",
            err: {},
            data: response
        })

    } catch (error) {
        next(error);
    }
}

async function getAllProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems(req.query.skip, req.query.limit);
        res.status(StatusCodes.OK).json({
            success: true,
            message: "successfully Fetch the all problem data",
            err: {},
            data: response
        })

    } catch (error) {
        next(error);
    }
}

async function addProblem(req, res, next) {
    try {
        const response = await problemService.createProblem(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "successfully create a new problem",
            err: {},
            data: response
        })

    } catch (error) {
        next(error);
    }
}

async function updateProblem(req, res, next) {
    try {
        const response = await problemService.updateProblem(id, req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "successfully Updated the problem",
            err: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {

    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented" })
}


module.exports = {
    pingProblemController,
    getProblem,
    getAllProblems,
    addProblem,
    updateProblem,
    deleteProblem
}