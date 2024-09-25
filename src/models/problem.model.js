const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
    alternateId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: [true, "Title Cannot be Empty"]
    },
    titleSlug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "Description cannot be Empty"]
    },
    hints: [String],

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
                required: false
            }
        }
    ],
    codeStubs: [
        {
            language: {
                type: String,
                enum: ["C++", "Java", "Python"],
                required: true
            },
            languageSlug: {
                type: String,
                enum: ["cpp", "java", "python"]
            },
            startSnippet: {
                type: String,
                required: false
            },
            userSnippet: {
                type: String,
                required: true
            },
            endSnippet: {
                type: String,
                required: false
            }
        }
    ],
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    editorial: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: false,
    }
});

problemSchema.index({ alternateId: 1 });

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;