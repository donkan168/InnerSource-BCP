
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === 'index.html') {
        loadProjects();
    } else if (currentPage === 'ranking.html') {
        loadContributors();
    } else if (currentPage === 'teams.html') {
        loadTeams();
    }
});

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = ''; 
    
    projects.forEach(project => {
        const techBadges = project.technologies.map(tech => 
            `<span class="badge bg-secondary tech-badge">${tech}</span>`
        ).join('');
        
        const teamMembers = project.team.members.join(', ');
        
        const projectCard = `
            <div class="col-12 col-md-6 col-lg-6">
                <div class="card h-100">
                    <img src="${project.image}" class="card-img-top" alt="${project.name}">
                    <div class="card-body">
                         <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">${project.name}</h5>
                            <span class="badge bg-success">Activo</span>
                        </div>
                        <p class="card-text">${project.description}</p>
                        <p><strong>Objective:</strong> ${project.objective}</p>
                        <p><strong>Team:</strong> ${project.team.name}</p>
                        <p><strong>Members:</strong> ${teamMembers}</p>
                        <div class="mb-3">
                            ${techBadges}
                        </div>
                        <div class="project-links">
                            <a href="${project.links.teams}" target="_blank" class="btn btn-sm btn-outline-primary">
                                <i class="fab fa-microsoft"></i> Teams
                            </a>
                            <a href="${project.links.documentation}" target="_blank" class="btn btn-sm btn-outline-info">
                                <i class="fas fa-book"></i> Docs
                            </a>
                            <a href="${project.links.github}" target="_blank" class="btn btn-sm btn-outline-dark">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        projectsContainer.innerHTML += projectCard;
    });
}

function loadContributors() {
    const contributorsContainer = document.getElementById('contributors-container');
    
    if (!contributorsContainer) return;
    
    const sortedContributors = [...contributors].sort((a, b) => {
        const idA = Number.isFinite(a.id) ? a.id : 0;
        const idB = Number.isFinite(b.id) ? b.id : 0;
        return idA - idB;
    });
    contributorsContainer.innerHTML = '';
    
    contributorsContainer.innerHTML = '<div class="col-lg-8 mx-auto"><div class="list-group"></div></div>';
    const listGroup = contributorsContainer.querySelector('.list-group');
    
    sortedContributors.forEach((contributor, index) => {
        const rank = index + 1;
        const rankClass = rank <= 3 ? 'text-warning' : 'text-muted';
        
        const contributorItem = `
            <div class="list-group-item list-group-item-action">
                <div class="d-flex w-100 align-items-center">
                    <span class="contributor-rank ${rankClass} me-3 h4 mb-0">#${rank}</span>
                    <img src="${contributor.avatar}" alt="${contributor.name}" class="contributor-avatar me-3" style="width:50px;height:50px;border-radius:50%">
                    <div class="flex-grow-1">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="mb-1">${contributor.name}</h5>
                            <span class="badge bg-primary rounded-pill">${contributor.contributions} contribuciones</span>
                        </div>
                        <p class="mb-1">${contributor.role}</p>
                        <small class="text-muted">${contributor.team}</small>
                    </div>
                </div>
            </div>
        `;
        
        listGroup.innerHTML += contributorItem;
    });
}

function loadTeams() {
    const teamsContainer = document.getElementById('teams-container');
    
    if (!teamsContainer) return;
    
    teams.forEach(team => {
        const teamCard = `
            <div class="col-md-4">
                <div class="card mb-4 team-card">
                    <div class="team-header">
                        <h4>${team.name}</h4>
                    </div>
                    <div class="card-body">
                        <p>${team.description}</p>
                        <div class="mb-3">
                            <strong>Product Owner:</strong> ${team.productOwner}
                        </div>
                        <div class="mb-3">
                            <strong>Contact:</strong> 
                            <a href="mailto:${team.email}">${team.email}</a>
                        </div>
                        <a href="mailto:${team.email}" class="btn btn-outline-primary">Contact Team</a>
                    </div>
                </div>
            </div>
        `;
        
        teamsContainer.innerHTML += teamCard;
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadProjects,
        loadContributors,
        loadTeams
    };
}