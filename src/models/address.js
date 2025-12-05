const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    cep: {
      type: String,
      required: true
    },

    logradouro: {
      type: String,
      required: true
    },

    numero: {
      type: String,
      required: true
    },

    bairro: {
      type: String,
      required: true
    },

    cidade: {
      type: String,
      required: true
    },

    estado: {
      type: String,
      required: true
    },

    pais: {
      type: String,
      default: "BRASIL"
    },


    principal: {
      type: Boolean,
      default: false
    },


    entrega: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
