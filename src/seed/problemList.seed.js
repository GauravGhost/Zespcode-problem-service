const ProblemRepository = require('../repositories/problem.repository');
const TagRepository = require('../repositories/tag.repository')

async function problemListSeeding() {
    const problemRepository = new ProblemRepository();
    const tagRepository = new TagRepository();
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
    // await problemRepository.deleteMany();
    // console.log("All problem Deleted");
    // await problemRepository.createManyProblem(modifiedProblemData);
    // console.log("problem Data seeded to the database");
}


module.exports = {
    problemListSeeding
}