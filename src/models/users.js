const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact_email: { type: String, required: true },
    user: { type: String, required: true },
    pwd: { type: String, required: true },

    level: {
      type: String,
      enum: ["admin", "user", "buyer"],
      required: true
    },

    status: {
      type: String,
      enum: ["on", "off"],
      required: true
    },

   
    store_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
      default: null
    },

    
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "suppliers",
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
