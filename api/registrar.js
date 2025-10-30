function doPost(e){
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById("https://script.google.com/macros/s/AKfycbyvzKjjJuiCOEhri6IToioMrgz8kJuJ-5gkotFcObVDjgvFlE1UwiN1a1KMHO9e4prq/exec");
  const sheet = ss.getSheetByName("Saídas") || ss.insertSheet("Saídas");
  sheet.appendRow([
    new Date().toLocaleString("pt-BR",{timeZone:"America/Bahia"}),
    data.codigo, data.nome, data.pesoKg, data.valor
  ]);
  return ContentService.createTextOutput("OK");
}
