const mongoose = require('mongoose');

const problemListSchema = new mongoose.Schema({
    problemId: {
        type: String,
        required: true
    },
    tags: [
        {
            name: String,
            slug: String
        }
    ],
    title: {
        type: String,
        required: true,
    },
    titleSlug: {
        type: String,
        required: true
    }
});

const ProblemList = mongoose.model('ProblemList', problemListSchema);

module.exports = ProblemList;