const InternalServerError = require("../errors/internal.server.error");
const { ProblemList } = require("../models");


class ProblemListRepository {
    async createProblemList(problemListData) {
        try {
            const problemList = await ProblemList.create(problemListData);
            return problemList;

        } catch (error) {
            throw new InternalServerError("Database Error while creating: " + error.message);
        }
    }

    async createManyProblemList(problemListDataArray) {
        try {
            const problemList = await ProblemList.insertMany(problemListDataArray)
            return problemList;
        } catch (error) {
            throw new InternalServerError("Database Error while creating: " + error.message);
        }
    }

    async getAllProblemLists(skip = 0, limit = 100) {
        try {
            const problemLists = await ProblemList.find().skip(skip).limit(limit).sort({ alternateId: 'asc' });
            return problemLists;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async getProblemList(id) {
        try {
            const problemList = await ProblemList.findById(id).populate({ path: 'tags', select: { 'name': 1, 'slug': 1 } });
            return problemList;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async updateProblemList(id, updatedData) {
        try {
            const newProblemList = await ProblemList.findByIdAndUpdate(id, updatedData);
            return newProblemList;
        } catch (error) {
            throw new InternalServerError("Database Error while updating: " + error.message);
        }
    }

    async deleteProblemList(id) {
        try {
            const problemList = await ProblemList.findByIdAndDelete(id);
            return problemList;
        } catch (error) {
            throw new InternalServerError("Database Error while deleting: " + error.message);
        }
    }

    async deleteMany() {
        try {
            const problemList = await ProblemList.deleteMany({});
            return problemList;
        } catch (error) {
            throw new InternalServerError("Database Error while deleting: " + error.message);
        }
    }
}


module.exports = ProblemListRepository;