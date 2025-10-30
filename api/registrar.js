export default async function handler(req, res) {
  const data = await req.json();

  const scriptUrl = "https://script.google.com/macros/s/AKfycbyvzKjjJuiCOEhri6IToioMrgz8kJuJ-5gkotFcObVDjgvFlE1UwiN1a1KMHO9e4prq/exec";

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const texto = await response.text();
  res.json({ ok: texto.includes("OK") });
}
