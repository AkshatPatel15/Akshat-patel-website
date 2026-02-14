export const content = {
    hero: {
        greeting: "HELLO",
        name: "I am Akshat Patel.",
        title: "Backend Software Developer | Azure Specialist",
        bio: "Backend Software Developer with extensive experience in Agile, Scrum, and SDLC methodologies. Specializing in engineering cloud-native ETL pipelines, building scalable Spring Boot microservices, and implementing seamless integrations on Azure. Proficient in Java 8+, Microservices architecture, and securing API traffic. Dedicated to optimizing workflows and delivering high-performance backend solutions.",
        details: [
            { label: "Name", value: "Akshat Patel" },
            { label: "Email", value: "Akshatkumar.a.patel@gmail.com" },
            { label: "Location", value: "Toronto, Ontario, Canada" },
        ],
        socials: [
            { name: "linkedin", url: "https://www.linkedin.com/in/akshatpatel15599/" }, // Placeholder - kept existing ID pattern but user should verify
            { name: "github", url: "https://github.com/AkshatPatel15" },
            // { name: "twitter", url: "https://twitter.com/devpatel0414" },
        ],
    },
    skills: {
        title: "SKILLS",
        items: [
            { name: "Java / Spring Boot", percentage: 95 },
            { name: "Azure (AKS, AKV)", percentage: 90 },
            { name: "Microservices", percentage: 90 },
            { name: "SQL / NoSQL", percentage: 85 },
            { name: "Docker / K8s", percentage: 80 },
            { name: "CI/CD (Jenkins)", percentage: 85 },
        ]
    },
    experience: {
        title: "EXPERIENCE",
        items: [
            {
                company: "Manulife",
                role: "Backend Software Developer",
                period: "Jan 2024 - Present",
                description: "Engineered cloud-native ETL pipelines and built scalable Spring Boot microservices. Integrated Azure Kubernetes Service (AKS), Azure Key Vault, and Azure Data Explorer. Implemented end-to-end integration workflows between Ivalua and Sirion.",
            },
            {
                company: "Trevita InfoTech",
                role: "Java Developer",
                period: "June 2021 - July 2022",
                description: "Designed business logic using Agile/Scrum. Developed Java 8 code and implemented Microservices architecture with Spring Boot and Apache Kafka. Integrated RESTful services and worked on Camel-based middleware.",
            },
        ]
    },
    education: {
        title: "EDUCATION",
        items: [
            {
                institution: "Georgian College",
                degree: "Big Data Analysis",
                period: "Barrie, ON",
                description: "Specialized post-graduate certificate in Big Data technologies.",
            },
            {
                institution: "George Brown College",
                degree: "Cloud Computing",
                period: "Toronto, ON",
                description: "Specialized post-graduate certificate in Cloud infrastructure and services.",
            },
            {
                institution: "Gujarat Technology University",
                degree: "Bachelor of Information Technology",
                period: "Gujarat, India",
                description: "Foundation in Computer Science and Information Technology.",
            }
        ]
    },
    navLinks: [
        { label: "HOME", target: "home" },
        { label: "SKILLS", target: "skills" },
        { label: "EXPERIENCE", target: "experience" },
        { label: "EDUCATION", target: "education" },
        { label: "FEEDBACK", target: "feedback" },
        { label: "CONTACT ME", target: "contact" },
    ]
};
