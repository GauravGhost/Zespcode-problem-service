const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Cannot be Empty"]
    },

    description: {
        type: String,
        required: [true, "Description cannot be Empty"]
    },

    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: [true, "Difficulty cannot be Empty"],
        default: "easy"
    },

    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial : {
        type: String,
    }
});


const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;