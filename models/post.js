const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
        name: String,
        logo: String,
        location: String,
        website: String,
        description: String,
        beers =[
            {
                name: String,
                picture: String,
                price: Number,
                description: String,
                type: String,
                alcoholContent: Number,
                quantity: Number,
                userReviews = {},
            },
        ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
