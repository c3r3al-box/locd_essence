import mongoose, { Mongoose } from "mongoose";

//creating products schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },
        },
    ],

    category: {
        type: String,
        required: [true, 'Please enter product category'],
        enum: {    //ensure selection is from this categories
              values: [
                "Locs_accessories",
                "Headwraps",
                "Shampoos",
                "Moisturisers",
                "Care_essentials",
              ],
              message: "Please select correct category"
        },

    seller: {
            type: String,
            required: [true, 'Please enter product seller']
        },
    stock: {
            type: Number,
            required: [true, 'Please enter product stock']
        },    
    ratings: {
            type: String,
           default: 0
        },
    reviews: [
        {
            //add user later
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],  
    createdAt: {
        type: Date,
        default: Date.now,
    },      
    }, //add user after adding pagination
})
export default mongoose.models.Products || mongoose.model('Products', productSchema)