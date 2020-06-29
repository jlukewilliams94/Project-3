const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
        name: String,
        logo: String,
        location: String,
        website: String,
        description: String,
       
});

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
})



const breweryPost = mongoose.model("Post", brewerySchema);
const beerPost = mongoose.model("Post", beerSchema);

module.exports = breweryPost;
module.exports = beerPost;
