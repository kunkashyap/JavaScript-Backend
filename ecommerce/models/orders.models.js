import mongoose from "mongoose";


const orderItemSchema = new mongoose.Schema({
    productId : {
        type :mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type: Number,
        required: true
    }


})

const orderSchema = new mongoose.Schema({
    orderPrice : {
        type: Number,
        required: true,

    },
    customerName : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,

    },
    address : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,

    },
    status : {
        type:String,
        enum : ["PENDING", "CANCELLED", "DELIVERED"]

    },
    orderItems : {
        type : [orderItemSchema]
    }

},{timestamps:true});


export const Order = mongoose.model("Order", orderSchema);