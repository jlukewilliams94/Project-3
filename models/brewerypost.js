const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
        name: String,
        logo: String,
        location: String,
        website: String,
        description: String,
        id: Number
});





const breweryPost = mongoose.model("breweryPost", brewerySchema);


module.exports = breweryPost;

