const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter your Category name!"],
        unique: true,
    },
    shopId:{
     type: String,
     required:true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
      },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Category", CategorySchema);