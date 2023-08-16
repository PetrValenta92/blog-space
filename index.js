fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        document.getElementById("posts").innerHTML = postsArr.map((post) => 
            `<h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>`).join("");    
    });

document.getElementById("new-post").addEventListener("submit", (e) => {
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
        .then(response => response.json())
        .then(data => console.log(data));
});