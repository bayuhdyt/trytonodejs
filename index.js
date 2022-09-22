const http = require("http");
const rupiah = require("rupiah-format");
const host = "127.0.0.1";
const port = 3002;

// resquest adalah data masuk dari luar
//  response = data keluar dari sistem
const server = http.createServer(function (request, response) {
  const nama = "bayu hendri";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);
  const hasil = `
  <head>
    <title>${nama}</title>
    </head>
    <body>
    <h1 style='background: black;color: white;padding: 20px; text-align: center'>NODE JS UANG JAJAN</h1>
  <p>halo nama saya ${nama}. saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}.</p>
  </body>`;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, ``, function () {
  console.log(`server menyala di ${host}:${port}`);
});
