let postsArray = [];
const formEl = document.getElementById("new-post");

function render () {
    document.getElementById("posts").innerHTML = postsArray.map((post) => 
        `<h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>`).join("");    
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
        .then(res => res.json())
        .then(data => {
            postsArray = data.slice(0, 5);
            render();
});

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        title: document.getElementById("post-title").value,
        body: document.getElementById("post-body").value
    };

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)        
        })
            .then(res => res.json())
            .then(post => {
                postsArray.unshift(post)
                render();
                formEl.reset();    
            });
});