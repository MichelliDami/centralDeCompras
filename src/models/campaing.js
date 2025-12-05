const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "supplier",
      required: true
    },

    name: {
      type: String,
      required: true
    },

    start_date: {
      type: Date,
      required: true
    },

    end_date: {
      type: Date,
      required: true
    },

    discount_percentage: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["on", "off"],
      default: "on"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", campaignSchema);
