// Função para cadastrar um novo usuário
var btn = document.querySelector("#send");
cadastrarUsuario = () => {};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  if (nome && email && senha) {
    cadastrarUsuario(nome, email, senha);
  } else {
    alert("Preencha todos os campos!");
  }
});
