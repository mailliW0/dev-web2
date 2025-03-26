import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Função para cadastrar um novo usuário
async function cadastrarUsuario(nome, email, senha) {
  const db = await open({
    filename: "./DEV_WEB/banco.db",
    driver: sqlite3.Database,
  });

  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY, nome TEXT,email TEXT,senha TEXT)`
  );
  db.run(
    `INSERT INTO usuarios (nome, email, senha) VALUES ?,?, `[
      (nome, email, senha)
    ]
  );
  console.log("Usuário cadastrado com sucesso!");
}

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

cadastrarUsuario(nome, email, senha);
