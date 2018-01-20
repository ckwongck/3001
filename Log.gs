
function logError(message, fileName, lineNumber){
  var errorSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Errors');
  lastRow = errorSheet.getLastRow() + 1;
  var range = errorSheet.getRange( 'A' + lastRow + ':D' +lastRow);
  range.setValues([[
    new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}),
    message,
    fileName,
    lineNumber
  ]]);
}


////  Error ////////////////////////////////////////////////////////////////////////////

function errorLog(e){
  logError(e.message, e.fileName, e.lineNumber);
}


function Log_test(range){
  if(!range){
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Errors');
    range = sheet.getRange('A1')
  }
  var d = new Date();
//  range.setValue( new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}) );
  range.setValue( new Date() );
}
