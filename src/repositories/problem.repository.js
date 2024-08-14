const InternalServerError = require("../errors/internal.server.error");
const { Problem } = require("../models");


class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create(problemData);
            return problem;

        } catch (error) {

            throw new InternalServerError("Database Error while creating: " + error.message);
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find();
            return problems;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            return problem;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async updateProblem(id, updatedData) {
        try {
            const newProblem = await Problem.findByIdAndUpdate(id, updatedData);
            return newProblem;
        } catch (error) {
            throw new InternalServerError("Database Error while updating: " + error.message);
        }
    }
    
    async deleteProblem(id) {
        try {
            const problem = await Problem.findByIdAndDelete(id);
            return problem;
        } catch (error) {
            throw new InternalServerError("Database Error while deleting: " + error.message);
        }
    }
}


module.exports = ProblemRepository;