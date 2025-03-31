document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou armazená-los
    // Por enquanto, vamos apenas exibir uma mensagem de sucesso
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "Cadastro feito com sucesso";

    // Limpar os campos do formulário
    document.getElementById("cadastroForm").reset();
  });
