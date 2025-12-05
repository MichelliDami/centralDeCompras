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
],

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
