const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    {
        userId: { type: String, require: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ]
    },
    { timestamps: true }
);


module.exports = mongoose.model("Cart", cartSchema);





// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   items: [
//     {
//       product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true
//       },
//       quantity: {
//         type: Number,
//         default: 1,
//         min: 1
//       }
//     }
//   ]
// });

// const Cart = mongoose.model('Cart', cartSchema);

// module.exports = Cart;
