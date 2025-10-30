export default async function handler(req, res) {
  try {
    const data = await req.json();
    const url = "https://script.google.com/macros/s/AKfycbzWHV44cOUxAVfLh-RdOEXevpgrDpg10AE16y-8LkKpqljiv71mjFX6Df8KYcvJha4Z/exec";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const txt = await response.text();
    res.json({ ok: txt.includes("OK") });
  } catch (err) {
    res.status(500).json({ ok: false, erro: err.message });
  }
}
