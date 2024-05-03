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

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(id){
        const problem = await this.problemRepository.getProblem(id);
        if(!problem){
            throw new NotFound("Problem", id);
        }
        return problem;
    }

    async updateProblem(id, updatedData){
        const updatedProblem = await this.problemRepository.updateProblem(id, updatedData);
        return updatedProblem;
    }

    async deleteProblem(id){
        const deletedProblem = await this.problemRepository.deleteProblem(id);
        return deletedProblem;
    }
}


module.exports = ProblemService;