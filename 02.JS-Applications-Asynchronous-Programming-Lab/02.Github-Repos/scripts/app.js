function loadRepos() {
	const reposUl = document.getElementById('repos');
	const username = document.getElementById('username').value;

	let url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(res => res.json())
		.then(repos => {
			reposUl.innerHTML = '';

			repos.forEach(repo => {
				const aElement = document.createElement('a');
				aElement.href = repo.html_url;
				aElement.textContent = repo.full_name;

				const liElement = document.createElement('li');
				liElement.appendChild(aElement);

				reposUl.appendChild(liElement);
			});
		})
		.catch(err => console.log(err));


}