const InternalServerError = require("../errors/internal.server.error");
const { Problem } = require("../models");


class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create(problemData);
            return problem;

        } catch (error) {
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find();
            return problems;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = ProblemRepository;