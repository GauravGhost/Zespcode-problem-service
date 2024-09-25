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

    async createManyProblem(problemDataArray) {
        try {
            const problem = await Problem.insertMany(problemDataArray)
            return problem;
        } catch (error) {
            throw new InternalServerError("Database Error while creating: " + error.message);
        }
    }

    async getAllProblems(skip = 0, limit = 100) {
        try {
            const problems = await Problem.find().skip(skip).limit(limit).sort({ alternateId: 'asc' });
            return problems;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async getAllProblemsForSeed(skip = 0, limit = 100) {
        try {
            const problems = await Problem.find({}, 'alternateId title titleSlug tags')
                .skip(skip)
  
                .sort({ alternateId: 'asc' })
                .populate({
                    path: 'tags',
                    select: 'name slug -_id'
                })
                .select('-_id');
            return problems;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id).populate({ path: 'tags', select: { 'name': 1, 'slug': 1 } });
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

    async deleteMany() {
        try {
            const problem = await Problem.deleteMany({});
            return problem;
        } catch (error) {
            throw new InternalServerError("Database Error while deleting: " + error.message);
        }
    }
}


module.exports = ProblemRepository;