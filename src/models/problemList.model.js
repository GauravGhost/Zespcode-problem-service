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
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: [true, "Difficulty cannot be Empty"],
        default: "easy"
    },
    acceptanceRate: {
        type: Number,
        default: 0
    },
    acceptedSubmissions: {
        type: Number,
        default: 0
    },
    totalSubmissions: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

const ProblemList = mongoose.model('ProblemList', problemListSchema);

module.exports = ProblemList;