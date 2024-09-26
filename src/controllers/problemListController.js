const { StatusCodes } = require('http-status-codes');
const { ProblemListService } = require('../services');
const { ProblemListRepository } = require('../repositories')

const problemListService = new ProblemListService(new ProblemListRepository());

async function getAllProblemLists(req, res, next) {
    try {
        const response = await problemListService.getAllProblemsList(req.query.skip, req.query.limit);
        res.status(StatusCodes.OK).json({
            success: true,
            message: "successfully Fetch the all problem List data",
            err: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}


// async function addProblemList(req, res, next) {
//     try {
//         const response = await problemListService.(req.body);
//         res.status(StatusCodes.CREATED).json({
//             success: true,
//             message: "successfully create a new problem List",
//             err: {},
//             data: response
//         })

//     } catch (error) {
//         next(error);
//     }
// }


module.exports = {
    getAllProblemLists,
}