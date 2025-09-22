import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    gallery: [
        {
            type: String,
            required: true
        }
    ],

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    alumini: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    donations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation"
        }
    ]

})