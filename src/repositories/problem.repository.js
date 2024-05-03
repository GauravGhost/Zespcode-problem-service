const InternalServerError = require("../errors/internal.server.error");
const { Problem } = require("../models");


class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create(problemData);
            return problem;

        } catch (error) {
            throw new InternalServerError("Problem in Create the problem data")
        }
    }
}


module.exports = ProblemRepository;