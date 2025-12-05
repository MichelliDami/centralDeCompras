const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    supplier_name: { type: String, required: true },

    status: {
      type: String,
      enum: ["on", "off"],
      required: true
    },

    addresses: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address"
          }
        ],
    
        contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contact"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("supplier", supplierSchema);
