// Sample data for InnerSource BCP Portal

const projects = [
    {
        id: 1,
        name: "Cloud Native Framework (CNF)",
        description: "Proyecto multimodulo de arquitectura que agrupa los proyectos atlas-core*, los cuales proveen todas las librerías y configuraciones necesarias para desarrollar micro-servicios.",
        objective: "Estandarizar el desarrollo de APIs y reducir el time-to-market para nuevos proyectos",
        team: {
            name: "SQ de Framework Backend",
            members: ["Juan Carlos Perez", "Pierre Recuay"]
        },
        technologies: ["Java 21", "Quarkus", "OpenAPI", "mapstruct", "Maven", "spotbugs", "lombok"],
        links: {
            teams: "https://teams.microsoft.com/",
            documentation: "ttps://wapceu2nfmcd04.azurewebsites.net/#/framework/atlas-cloud-native/libraries/atla-quarkus-fwk/v1.0.1/docs",
            github: "https://github.com/bcp/api-gateway-framework"
        },
        image: "img/projects/quarkus.png"
    },
    {
        id: 2,
        name: "BCPort Tool",
        description: "Herramienta de ayuda para el desarrollador a través de capacidades en el ciclo de vida del desarrollo de software, integrando buenas prácticas y estándares de la organización.",
        objective: "Garantizar el cumplimiento de las buenas prácticas y estándares de desarrollo en todos los proyectos de software",
        team: {
            name: "SQ de prácticas y entornos de desarrollo de software",
            members: ["William Cadillo", "Junior Querol"]
        },
        technologies: ["Python", "Spring boot", "Quarkus", "GetPort"],
        links: {
            teams: "https://teams.microsoft.com/",
            documentation: "https://bcp-ti.atlassian.net/wiki/spaces/CTTIIDPSPUB/pages/687800385/Gu+a+de+uso+BCPort",
            github: "https://github.com/BCP-Framework-Facilidades/idpo-actions"
        },
        image: "img/projects/BCPort.svg"
    },
    {
        id: 3,
        name: "GitHub copilot chat",
        description: "Proyecto para ayudar en la migración hacia el nuevo cloud native framework (CNF).",
        objective: "Acelerar el proceso de migración y adopción del nuevo framework CNF",
        team: {
            name: "Equipo de Copilot Chat",
            members: ["Jordiny Montanez", "Arturo Badillo", "Roger Huamani", "Mauricio Salamanca"]
        },
        technologies: ["Java", "GitHub Copilot"],
        links: {
            teams: "https://teams.microsoft.com/",
            documentation: "https://bcp-ti.atlassian.net/wiki/spaces/IDT/pages/7662952/Intelligent+Migration+Assistant+with+GitHub+Copilot",
            github: "https://github.com/BCP-Software-Engineering/cswe-engineering-handbook.git"
        },
        image: "img/projects/GitHub-Copilot.jpg"
    },
    {
        id: 4,
        name: "Agente personalizado de IA para BCP",
        description: "Un conjunto de herramientas que automatiza las verificaciones de cumplimiento de seguridad y ofrece guías de remediación para aplicaciones e infraestructura.",
        objective: "Mejorar la postura de seguridad y reducir la carga de cumplimiento para los equipos de desarrollo",
        team: {
            name: "SQ de Framework Backend",
            members: ["Mauricio Salamanca", "Angel Alvarado", "Falvio Suarez", "Victor Andrade", "Giancarlo Mairim"]
        },
        technologies: ["Azure", "Java", "GithubActions", "AI Models"],
        links: {
            teams: "https://teams.microsoft.com/",
            documentation: "https://confluence.bcp.com/security-toolkit-docs",
            github: "https://github.com/bcp/security-compliance-toolkit"
        },
        image: "img/projects/AI Agent BCP.png"
    }
];

const contributors = [
    {
        id: 1,
        name: "Jesus Angel Yauyo",
        role: "Nivel Maestro Yoda",
        team: "SW CONT CENT",
        contributions: 3,
        avatar: "../img/avatars/master-yoda.png"
    },
    {
        id: 2,
        name: "Angel Alvarado",
        role: "Nivel Darth Vader",
        team: "CALYPSO TESORERIA SQ INV DEV",
        contributions: 3,
        avatar: "../img/avatars/darth-vader.png"
    },
    {
        id: 3,
        name: "Flavio Suarez",
        role: "Nivel Jedi",
        team: "Framework Backend",
        contributions: 2,
        avatar: "../img/avatars/jedi-certified.png"
    },
    {
        id: 4,
        name: "Roger Huamani",
        role: "Nivel Mandaloriano",
        team: "Framework Backend",
        contributions: 2,
        avatar: "../img/avatars/mandalorian.png"
    },
    {
        id: 5,
        name: "Daniel Ramos",
        role: "Nivel Stormtrooper",
        team: "Equipo de Experiencia Digital",
        contributions: 2,
        avatar: "../img/avatars/storm-trooper.png"
    },
    {
        id: 6,
        name: "Gabriela Rios",
        role: "Nivel Arturito",
        team: "Equipo de Ingeniería de Seguridad",
        contributions: 1,
        avatar: "../img/avatars/arturito.png"
    }
];

const teams = [
    {
        id: 1,
        name: "Framework Frontend web",
        productOwner: "Jefferson Arturo Lara Molina",
        email: "jeffersonlara@bcp.com",
        description: "Responsable de el desarrollo de librerias y componentes reutilizables para aplicaciones web internas y externas"
    },
    {
        id: 2,
        name: "Framework Backend",
        productOwner: "Juan Carlos Perez Mullisaca",
        email: "juanperezm@bcp.com",
        description: "Responsable de el desarrollo de frameworks y herramientas reutilizables para servicios backend internos y externos"
    },
    {
        id: 3,
        name: "SQ de prácticas y entornos de desarrollo de software",
        productOwner: "William Cadillo",
        email: "wcadillo@bcp.com",
        description: "Responsable de la definiciion y guias de buenas prácticas para la construcción de APIs internas y externas, así como también de la evolución de la herramienta BCPort"
    }
];