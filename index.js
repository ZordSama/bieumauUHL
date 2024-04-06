$(document).ready(function () {
  $("#xinthoihoc").load("DonXinThoiHoc.html");
  $("#xinMGHP").load("DonXinMGHP.html");
  $("#xinTCXH").load("DonXinTCXH.html");
  $("#xinHTCPHT").load("DonXinHTCPHT.html");
  $("#xinHuongCSQN").load("DonXinHuongCSQN.html");
});

function toPDF(el) {
  doc = new jspdf.jsPDF();
  // const font = doc.getFontList()[0]; // Assuming the first font is the default
  doc.addFont('./libs/font/times.ttf', 'times', 'normal');
  doc.addFont('./libs/font/SVN-Times New Roman Bold.ttf', 'times', 'bold');
  doc.addFont('./libs/font/SVN-Times New Roman Italic.ttf', 'times', 'italic');
  doc.setFont('times');

  // console.log('doc :>> ', doc);
  doc.html(document.getElementById(el), {
    callback: function (pdf) {
      pdf.save("output.pdf");
    },
    x: 0,
    y: 0,
    width: 170, // set the width of the pdf to 170 mm (A4 width)
    height: 287, // set the height of the pdf to 287 mm (A4 height)
    windowWidth: 650, // set the width of the html content to 650 pixels
    windowHeight: 900, // set the height of the html content to 900 pixels (enough for most content to fit)
  });
}
