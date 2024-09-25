const {ProblemListRepository, ProblemRepository} = require('../repositories');

async function problemListSeeding() {
    const problemRepository = new ProblemRepository();
    const problemListRepository = new ProblemListRepository();

    const allProblems = await problemRepository.getAllProblemsForSeed();
    const filteredAllProblems = allProblems.map((problem) => {
        return {
            problemId: problem.alternateId,
            title: problem.title,
            titleSlug: problem.titleSlug,
            tags: problem.tags
        };
    });
    console.log(filteredAllProblems[0]);
    await problemListRepository.deleteMany();
    console.log("All problem Deleted");
    await problemListRepository.createManyProblemList(filteredAllProblems);
    console.log("problem Data seeded to the database");
}


module.exports = {
    problemListSeeding
}