// Array para armazenar os usuários cadastrados
const usuarios = [];

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };
    usuarios.push(usuario);
    console.log("Usuário cadastrado com sucesso!");
}

// Função para listar os usuários cadastrados
function listarUsuarios() {
    console.log("Lista de usuários cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Email: ${usuario.email}`);
    });
}

listarUsuarios();