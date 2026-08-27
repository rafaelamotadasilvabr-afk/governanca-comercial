/** Backend sugerido para a próxima etapa: Google Apps Script -> Google Sheets. */
const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
function doGet(){return ContentService.createTextOutput(JSON.stringify({ok:true,message:"API ativa"})).setMimeType(ContentService.MimeType.JSON);}
function doPost(e){try{const p=JSON.parse(e.postData.contents||"{}");const ss=SpreadsheetApp.openById(SPREADSHEET_ID);if(p.action==="saveMeeting"){ss.getSheetByName("REUNIOES").appendRow([new Date(),p.data.vendedor,p.data.data,p.data.meta,p.data.won,p.data.pipeline,p.data.strong,p.data.commit,p.data.resumo]);return out({ok:true});}return out({ok:false,error:"Ação inválida"});}catch(err){return out({ok:false,error:String(err)});}}
function out(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
