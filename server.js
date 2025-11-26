const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

// Conexão com o banco
const conectarBanco = require("./src/config/database");

// Rotas unificadas
const routes = require("./src/routes");

const app = express();
app.use(express.json());
app.use(cors());

// ==== Conectando ao banco ====
conectarBanco();

// ==== Carregando Swagger ====
let swaggerDocument;
try {
  const swaggerPath = path.join(__dirname, "swagger/swagger.json");
  const swaggerData = fs.readFileSync(swaggerPath, "utf8");
  swaggerDocument = JSON.parse(swaggerData);
  console.log("✅ Swagger carregado com sucesso!");
} catch (err) {
  console.error("❌ Erro ao carregar swagger.json:", err.message);
  swaggerDocument = {
    openapi: "3.0.0",
    info: { title: "Swagger vazio", version: "1.0.0" }
  };
}

// ==== Rotas ====
app.use("/", routes);

// ==== Swagger ====
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ==== Rota teste ====
app.get("/ping", (req, res) => {
  res.send("API está funcionando!");
});

// ==== Servidor ====
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`🔥 API rodando na porta ${PORT}`);
  console.log(`📘 Documentação Swagger em /api-docs`);
});
