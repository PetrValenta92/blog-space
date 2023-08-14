fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        document.getElementById("posts").innerHTML = postsArr.map((post) => 
            `<h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>`).join("");    
    });