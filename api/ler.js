export default async function handler(req, res) {
  const { codigo } = req.query;
  if (!codigo || codigo.length < 13)
    return res.status(400).json({ erro: "Código inválido" });

  const produtoId = codigo.slice(1, 6);
  const pesoGramas = parseInt(codigo.slice(6, 11));
  const pesoKg = pesoGramas / 1000;

  // Tabela de produtos (pode puxar de planilha se quiser)
  const produtos = {
    "12345": { nome: "Picanha Mercatto", precoKg: 79.9 },
    "23456": { nome: "Coxão Mole", precoKg: 44.5 },
    "34567": { nome: "Asa de Frango", precoKg: 17.9 },
  };

  const p = produtos[produtoId];
  if (!p) return res.status(404).json({ erro: "Produto não cadastrado" });

  const valor = p.precoKg * pesoKg;
  res.json({ nome: p.nome, pesoKg, valor, codigo });
}
