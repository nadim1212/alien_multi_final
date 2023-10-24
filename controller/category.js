const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const Category = require("../model/category");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAdmin, isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.post("/create-category",
 isSeller,
catchAsyncErrors(async(req,res,next)=>{
    try {
        const isCategoryExists = await Category.find({name: req.body.name});

        if(isCategoryExists.length !== 0){
            return next (new ErrorHandler("Category Already Exists",400));
        }
        const category = await Category.create(req.body);

        res.status(201).json({
            success: true,
            category,
        });
    }  catch (error) {
        return next(new ErrorHandler(error,400));
    }
}));

module.exports = router;