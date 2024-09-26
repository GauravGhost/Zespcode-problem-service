class ProblemListService {
    constructor(problemListRepository){
        this.problemListRepository = problemListRepository;
    }

    async getAllProblemsList(skip, limit) {
        const problems = await this.problemListRepository.getAllProblemLists(skip, limit);
        return problems;
    }

}

module.exports = ProblemListService;