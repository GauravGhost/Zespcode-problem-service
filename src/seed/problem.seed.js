const ProblemRepository = require('../repositories/problem.repository');
const TagRepository = require('../repositories/tag.repository')
const path = require('node:path');
const fs = require('node:fs');

async function problemSeeding() {
    const problemRepository = new ProblemRepository();
    const tagRepository = new TagRepository();
    const problemData = JSON.parse(fs.readFileSync(path.join(__dirname, "../utils/seed-data/problemData.json")));
    const modifiedProblemData = await Promise.all(problemData.map(async (problem) => {
        const tagIds = await Promise.all(problem.tags.map(async (tag) => {
            const tagData = await tagRepository.getTagBySlug(tag);
            if (tagData) {
                // console.log("id ", tagData._id, tagData);
                return tagData._id;
            }
        }));
        return { ...problem, tags: tagIds }
    }))
    console.log(Array.isArray(modifiedProblemData));
    console.log(modifiedProblemData[0]);
    await problemRepository.deleteMany();
    console.log("All problem Deleted");
    await problemRepository.createManyProblem(modifiedProblemData);
    console.log("problem Data seeded to the database");
}


module.exports = {
    problemSeeding
}