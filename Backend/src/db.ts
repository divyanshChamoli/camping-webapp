import { Schema, model, Types } from "mongoose"
const mongoose = import("mongoose")

export const connectToDB=async ()=>{
    try{
        (await mongoose).connect("mongodb+srv://divyanshchamoli:wxvn7144@cluster0.qrzriqj.mongodb.net/camping-webapp")
        console.log("DB connected")
    }
    catch(err){
        console.log("DB not connected",err)
    }
}

connectToDB()

export interface User{
    username: string ,
    firstName: string ,
    lastName: string ,
    password: string,
    campsCreated:  Types.ObjectId[]
    reviewsCreated: Types.ObjectId[]
}

export interface Camp{
    campName: string,
    campDescription: string,
    campLocation: string,
    campPrice: number,
    // campImageUrl: string,
    images: {
        fileName: string,
        url: string 
    }[],
    geometry: {
        type: 'Point',
        coordinates: number[]
    }
    reviewsOnCamp: Types.ObjectId[]
    user: Types.ObjectId
}

export interface Review{
    reviewText: string,
    rating: number,
    user: Types.ObjectId,
    camp: Types.ObjectId
}

const UserSchema= new Schema<User>({
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxlength: 50
    },
    firstName: { 
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: { 
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    password: { 
        type: String,
        required: true,
        minlength: 6
    },
    campsCreated: [{
        type: Schema.Types.ObjectId,
        ref: "Camp"
    }],
    reviewsCreated: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]
})

const CampSchema=new Schema<Camp>({
    campName: { 
        type: String,
        required: true,
        trim: true,
    },
    campDescription:{ 
        type: String,
        required: true,
        trim: true
    },
    campLocation:{ 
        type: String,
        required: true,
        trim: true
    },
    campPrice: { 
        type: Number,
        required: true,
    },
    // campImageUrl: { 
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    geometry: {
        type: {
          type: String, 
          enum: ['Point'], 
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    images: [
        {
            fileName: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    reviewsOnCamp:[{
        type: Schema.Types.ObjectId,
        ref: "Review", 
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

const ReviewSchema=new Schema<Review>({
    reviewText: { 
        type: String,
        required: true,
        trim: true
    },
    rating: { 
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    camp: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const User = model<User>("User", UserSchema)
export const Camp = model<Camp>("Camp", CampSchema)
export const Review = model<Review>("Review", ReviewSchema)



