const username = "giturag";
const container = document.getElementById("tools-container");

fetch(`https://api..github.com/users/${username}/repos`)
.then(response => response.json())
.then(repos => {

    const securityRepos = repos.filter(repo =>
        repo.name.includes("scanner") ||
        repo.name.includes("security") ||
        repo.name.includes("analyzer")
    );

    securityRepos.forEach(repo => {
        
        const project = document.createElement("div");
        project.classList.add("tool-card");

        project.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "Security tool written in python."}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;

        container.appendChild(project);
    });
    
});