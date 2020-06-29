const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: String,
    picture: String,
    price: Number,
    description: String,
    type: String,
    alcoholContent: String,
    quantity: Number,
    userReviews: String,
    brewery_id: Number
});

const beerPost = mongoose.model("beerPost", beerSchema);
module.exports = beerPost;