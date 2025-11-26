const mongoose = require("mongoose");

async function conectarBanco() {
  try {
    await mongoose.connect(
       "mongodb+srv://michellydaminelli_db_user:Dami2025@cluster0.majxywy.mongodb.net/centralDeCompras?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("🔥 MongoDB Atlas conectado com sucesso!");

  } catch (err) {
    console.error("❌ Erro ao conectar ao MongoDB:", err);
  }
}

module.exports = conectarBanco;
