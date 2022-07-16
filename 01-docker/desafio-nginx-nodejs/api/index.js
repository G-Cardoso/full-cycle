const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = 8080

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'docker',
  database: 'fullcycle',
  port: '3306',
})

connection.query(`INSERT INTO pessoa(nome) VALUES('Gabriel Cardoso Mendes de Ataide')`)

app.use(express.json())

app.get('/', (req, res) => {
  connection.query('SELECT nome FROM pessoa', function (err, rows, fields) {
    if (err) throw err;
  
    let html = '<h1>Full Cycle Rocks!</h1>';
    html += '<ol>'
    rows.forEach((row) => {
      html = html + '<li>' + row.nome + '</li>';
    });
    html += '</ol>'
   
    return res.send(html)
  });
})

app.get("/:username", (req, resp) => {
  const { username } = req.params;
  console.log(username);

  connection.query(
    `INSERT INTO pessoa SET nome=?`, username,
    (err, results) => {
      connection.query(
        "SELECT * FROM `pessoa`",
        function (err, results, fields) {
          return resp.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
        ${results.reduce((agg, cur) => agg + `<li>${cur.nome}</li>`, "")}
        </ol>`);
        }
      );
    }
  );
});

app.listen(PORT, () => {
  return console.log(`Server is runing at port ${PORT}`)
})
