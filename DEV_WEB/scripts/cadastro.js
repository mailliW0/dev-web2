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