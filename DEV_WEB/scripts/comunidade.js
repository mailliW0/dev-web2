
const  post= {
    content: "",
    user: "",
    date: Date
}
//parte de comunidade, faz os posts do usuario e deleta os posts. commitou???? n esquece hein
document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("Postar");
    const postList = document.getElementById("postList");

    postForm.addEventListener("submit", function (event) {
        this.onclick
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