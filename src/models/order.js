const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit_price: {
    type: Number,
    required: true
  },
  campaign_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "campaign",
    required: false
  }
});

const orderSchema = new mongoose.Schema(
  {
    store_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
      required: true
    },

    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "supplier",
      required: true
    },

    items: {
      type: [ItemSchema],
      default: []
    },

    total_amount: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ["pending", "approved", "sent", "delivered", "canceled"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
