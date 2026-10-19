const username = "giturag";
const container = document.getElementById("tools-container");
const toolsSection = document.getElementById("security-tools");

// Repos whose names contain any of these words appear under "Security Tools".
const keywords = ["scanner", "security", "analyzer"];

function escapeHtml(text) {
  const el = document.createElement("div");
  el.textContent = text;
  return el.innerHTML;
}

if (container && toolsSection) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      if (!Array.isArray(repos)) return;

      const securityRepos = repos.filter(repo =>
        keywords.some(word => repo.name.toLowerCase().includes(word))
      );

      // Nothing matched: leave the whole section hidden instead of showing an empty heading.
      if (securityRepos.length === 0) return;

      securityRepos.forEach(repo => {
        const project = document.createElement("div");
        project.classList.add("tool-card");
        project.innerHTML = `
          <h3>${escapeHtml(repo.name)}</h3>
          <p>${escapeHtml(repo.description || "Security tool.")}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener">View on GitHub</a>
        `;
        container.appendChild(project);
      });

      toolsSection.hidden = false;
    })
    .catch(() => { /* API unavailable: keep the section hidden */ });
}
