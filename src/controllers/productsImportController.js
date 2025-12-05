const XLSX = require("xlsx");
const ProductsService = require("../services/productsServices");


const EXPECTED_HEADERS = [
  "name",
  "description",
  "price",
  "stock_quantity",
  "supplier_id",
  "status",
  "barcode"
];

class ProductsImportController {
  async import(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Envie um arquivo Excel" });
      }

      const workbook = XLSX.readFile(req.file.path);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      if (rows.length === 0) {
        return res.status(400).json({ error: "Arquivo vazio" });
      }

      const headers = Object.keys(rows[0]).map(h => h.trim());

      // validar cabeçalhos obrigatórios
      for (const expected of EXPECTED_HEADERS) {
        if (!headers.includes(expected)) {
          return res.status(400).json({
            error: `cabeçalho inválido: esperado '${expected}'`
          });
        }
      }

      // validar total de colunas
      if (headers.length !== EXPECTED_HEADERS.length) {
        return res.status(400).json({
          error: `quantidade de colunas inválida: esperado ${EXPECTED_HEADERS.length}, recebido ${headers.length}`
        });
      }

      const imported = [];

      for (const row of rows) {
        const product = await ProductsService.create({
          name: row.name,
          description: row.description,
          price: Number(row.price),
          stock_quantity: Number(row.stock_quantity),
          supplier_id: row.supplier_id,
          status: row.status,
          barcode: row.barcode
        });

        imported.push(product);
      }

      res.json({
        message: "Importação concluída",
        total: imported.length,
        produtos: imported
      });

    } catch (err) {
      console.error("Erro ao importar Excel:", err);
      res.status(500).json({ error: "Erro ao importar arquivo" });
    }
  }
}

module.exports = new ProductsImportController();
