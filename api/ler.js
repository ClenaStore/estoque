export default async function handler(req, res) {
  const { codigo } = req.query;
  if (!codigo || codigo.length < 13) return res.status(400).json({ erro: "Código inválido" });

  const produtoId = codigo.slice(1, 6);
  const pesoGramas = parseInt(codigo.slice(6, 11));
  const pesoKg = pesoGramas / 1000;

  // Tabela base de produtos
  const produtos = {
    "4242": { nome: "Picanha", precoKg: 56.0 },
    "23456": { nome: "Coxão Mole", precoKg: 45.0 },
    "34567": { nome: "Asa de Frango", precoKg: 18.0 }
  };

  const p = produtos[produtoId];
  if (!p) return res.status(404).json({ erro: "Produto não cadastrado" });

  const valor = p.precoKg * pesoKg;
  res.json({ nome: p.nome, pesoKg, valor, codigo });
}
