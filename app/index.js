const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Projeto Toshiro Shibakita - Desenvolvido por Felipe!<br><br>📎 <a href="https://www.linkedin.com/in/felipe">LinkedIn</a><br>💻 <a href="https://github.com/felipedev">GitHub</a>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

