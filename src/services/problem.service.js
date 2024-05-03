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
}


module.exports = ProblemService;