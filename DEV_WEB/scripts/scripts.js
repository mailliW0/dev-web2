document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou armazená-los
    // Por enquanto, vamos apenas exibir uma mensagem de sucesso
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = 'Cadastro feito com sucesso'

    // Limpar os campos do formulário
    document.getElementById('cadastroForm').reset();
});

//parte de comunidade, faz os posts do usuario e deleta os posts.
document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const postList = document.getElementById("postList");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const postContent = document.getElementById("postContent").value;
        if (postContent.trim() === "") return;

        const postItem = document.createElement("div");
        postItem.classList.add("post-item");
        postItem.innerHTML = `
            <p>${postContent}</p>
            <button class="delete-btn">Remover</button>
        `;

        postList.appendChild(postItem);
        document.getElementById("postContent").value = "";

        postItem.querySelector(".delete-btn").addEventListener("click", function () {
            postList.removeChild(postItem);
        });
    });
});


