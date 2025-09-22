import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    points: [
        {
            type: String,
        }
    ],
    liveLink: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gallery: [{
        type: String
    }]

})

const Project = mongoose.model.Project || mongoose.model("Project", projectSchema);
export default Project;
