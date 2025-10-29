
const { loadProjects, loadContributors, loadTeams } = require('../js/main.js');

global.projects = [];
global.contributors = [];
global.teams = [];

describe('InnerSource Portal Functions', () => {
    
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="projects-container"></div>
            <div id="contributors-container"></div>
            <div id="teams-container"></div>
        `;
    });

    describe('loadProjects', () => {
        test('should load projects correctly', () => {
            global.projects = [{
                name: "Test Project",
                description: "Test Description",
                objective: "Test Objective",
                image: "test.jpg",
                technologies: ["Tech1", "Tech2"],
                team: {
                    name: "Test Team",
                    members: ["Member 1", "Member 2"]
                },
                links: {
                    teams: "teams-link",
                    documentation: "docs-link",
                    github: "github-link"
                }
            }];

            loadProjects();

            const container = document.getElementById('projects-container');
            expect(container.innerHTML).toContain("Test Project");
            expect(container.innerHTML).toContain("Test Description");
            expect(container.innerHTML).toContain("Tech1");
            expect(container.innerHTML).toContain("Tech2");
        });
    });

    describe('loadContributors', () => {
        test('should sort and display contributors correctly', () => {
            global.contributors = [{
                name: "Contributor 1",
                contributions: 10,
                role: "Developer",
                team: "Team 1",
                avatar: "avatar1.jpg"
            }, {
                name: "Contributor 2",
                contributions: 20,
                role: "Developer",
                team: "Team 2",
                avatar: "avatar2.jpg"
            }];

            loadContributors();

            const container = document.getElementById('contributors-container');
            const contributorsHtml = container.innerHTML;
            expect(contributorsHtml.indexOf("Contributor 2")).toBeLessThan(contributorsHtml.indexOf("Contributor 1")); // Verifica el orden
            expect(contributorsHtml).toContain("20 contribuciones");
        });
    });

    describe('loadTeams', () => {
        test('should display teams information correctly', () => {
            global.teams = [{
                name: "Test Team",
                productOwner: "Test Owner",
                email: "test@bcp.com",
                description: "Test Description"
            }];

            loadTeams();

            const container = document.getElementById('teams-container');
            expect(container.innerHTML).toContain("Test Team");
            expect(container.innerHTML).toContain("Test Owner");
            expect(container.innerHTML).toContain("test@bcp.com");
        });
    });
});