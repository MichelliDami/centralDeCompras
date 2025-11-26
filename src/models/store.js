const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    store_name: {
      type: String,
      required: true
    },

    cnpj: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    phone_number: {
      type: String,
      required: true
    },

    contact_email: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["on", "off"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeSchema);
