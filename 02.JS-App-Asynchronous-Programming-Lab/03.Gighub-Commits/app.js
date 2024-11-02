function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsList = document.getElementById('commits');
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    commitsList.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(commitItems => {
                const li = document.createElement('li');
                li.textContent = `${commitItems.commit.author.name }: ${ commitItems.commit.message }`;
                commitsList.appendChild(li);
            });
        })
        .catch(error => {
            const errorMessage = `Error: ${response.status} (Not Found)`;
            const li = document.createElement('li');
            li.textContent = errorMessage;
            commitsList.appendChild(li);
        });
}