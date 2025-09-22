import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    reviewType: {
        type: String,
        enum: ["alumini", "blogs", "college"],
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },

    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: {
            type: String,
            enum: ["alumini", "blogs", "college"],
        },
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

})

const Review = mongoose.model.Review || mongoose.model("Review", reviewSchema);
export default Review;
