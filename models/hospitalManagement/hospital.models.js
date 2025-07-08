import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{   
        type: String,
        required: true,
        unique: true
    },
    
},{timestamps: true});

export const Hospital = mongoose.model("Hospital", hospitalSchema);