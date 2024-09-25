const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { sanitizeMarkdown } = require("../utils");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        // 1. sanitize the markdown for discription
        problemData.description = sanitizeMarkdown(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData);

        return problem;
    }

    async getAllProblems(skip, limit) {
        const problems = await this.problemRepository.getAllProblems(skip, limit);
        return problems;
    }

    async getProblem(id){
        const problem = await this.problemRepository.getProblem(id);
        if(!problem){
            logger.error(`Problem with id: ${id} not found in the db`)
            throw new NotFound("Problem", id);
        }
        return problem;
    }

    async updateProblem(id, updatedData){
        const updatedProblem = await this.problemRepository.updateProblem(id, updatedData);
        return updatedProblem;
    }

    async deleteProblem(id){
        const problem = await this.problemRepository.getProblem(id);
        if(!problem){
            logger.error(`Problem with id: ${id} not found in the db`)
            throw new NotFound("Problem", id);
        }
        const deletedProblem = await this.problemRepository.deleteProblem(id);
        return deletedProblem;
    }
}


module.exports = ProblemService;