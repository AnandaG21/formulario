import express from 'express';
import http from 'http';

const app = express();
const host = 'localhost';
const porta = 3000;
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <title>Cadastro do Paciente</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #b5b5f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .form-container {
            width: 700px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        }
        .form-container h2 {
            text-align: center;
            color: #4a4a8c;
        }
        .form-container form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
            row-gap: 10px;
        }
        .form-container label {
            color: #333333;
            font-weight: bold;
        }
        .form-container input,
        .form-container select {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 14px;
            width: 100%;
            box-sizing: border-box;
        }
        .address-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 10px;
            grid-column: span 2;
        }
        .complement-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
            grid-column: span 2;
        }
        .button-container {
            grid-column: span 2;
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
        .form-container button {
            width: 48%;
            padding: 10px;
            border-radius: 8px;
            border: none;
            color: white;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
        }
        .form-container button[type="submit"] {
            background-color: #4a4a8c;
        }
        .form-container button[type="reset"] {
            background-color: #888888;
        }
        .form-container button:hover {
            opacity: 0.9;
        }
    </style>
    </head>
    <body>
    <script type="module" src="index.js"></script>
    <div class="form-container">
    <h2>Cadastro do Paciente</h2>
    <form action="/submit" method="POST">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
      </div>
      <div>
        <label for="Idade">Idade:</label>
        <input type="number" id="Idade" name="Idade" required>
      </div>
      <div>
        <label for="Sexo">Sexo:</label>
        <select id="Sexo" name="Sexo">
          <option>Masculino</option>
          <option>Feminino</option>
          <option>Não binário</option>
        </select>
      </div>
      <div>
        <label for="convenio">Convênio:</label>
        <input type="text" id="convenio" name="convenio">
      </div>

      <label for="Endereco">Endereço:</label>
      <div class="address-grid">
        <input type="text" id="Endereco" name="Endereco" placeholder="Rua" required>
        <input type="text" id="Numero" name="Numero" placeholder="Número" required>
      </div>
      
      <div class="complement-grid">
        <input type="text" id="Complemento" name="Complemento" placeholder="Complemento">
        <input type="text" id="Bairro" name="Bairro" placeholder="Bairro" required>
        <input type="text" id="CEP" name="CEP" placeholder="CEP" required>
      </div>

      <div>
        <label for="Celular">Celular:</label>
        <input type="tel" id="Celular" name="Celular" required>
      </div>
      
      <div class="button-container">
        <button type="submit">Cadastrar</button>
        <button type="reset">Limpar</button>
      </div>
    </form>
    </div>
    </body>
    </html>`);
});
app.post('/submit', (req, res) => {
    const { nome, Idade, Sexo, convenio, Endereco, Numero, Complemento, Bairro, CEP, Celular } = req.body;
    res.send(`
        <h2>Dados Cadastrados com Sucesso!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${Idade}</p>
        <p><strong>Sexo:</strong> ${Sexo}</p>
        <p><strong>Convênio:</strong> ${convenio}</p>
        <p><strong>Endereço:</strong> ${Endereco}, ${Numero}, ${Complemento}, ${Bairro}, ${CEP}</p>
        <p><strong>Celular:</strong> ${Celular}</p>
    `);
});
export default app;
const servidor = http.createServer(app);
servidor.listen(porta, host, () => {
    console.log('Servidor escutando em http://' + host + ":" + porta);
});
