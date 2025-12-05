const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String },
    celular: { type: String },
    regiao: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("contact", contactSchema);
