const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    supplier_name: { type: String, required: true },
    supplier_category: { type: String, required: true },
    contact_email: { type: String, required: true },
    phone_number: { type: String, required: true },

    status: {
      type: String,
      enum: ["on", "off"],
      required: true
    },


    cnpj: { type: String, required: true },
    cep: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
