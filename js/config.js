// Profile Configuration
// This file contains all customizable profile data
// To create a new profile, simply update the values in this object

const profileConfig = {
    // Personal Information
    name: "Melisa Melody",
    title: "Data Analyst",
    subtitle: "Open Source Contributor",
    location: "",
    email: "melisamelody02@hotmail.com",
    phone: "", // Removed as requested
    
    // Education
    education: {
        institution: "Data Analysis",
        degree: "Data Analysis",
        status: "Professional"
    },
    
    // Current Work/Experience
    currentWork: {
        show: false, // Set to true if you want to show current work
        company: "",
        description: "",
        link: ""
    },
    
    // Skills and Technologies
    skills: [
        "Python",
        "R",
        "SQL",
        "Data Analysis",
        "Data Visualization",
        "Machine Learning",
        "Kubernetes",
        "Docker",
        "AWS",
        "Azure",
        "GCP",
        "Cloud Analytics",
        "Big Data",
        "Pandas",
        "NumPy",
        "Tableau",
        "Power BI",
        "Jupyter",
        "Git/GitHub"
    ],
    
    // Experience (years calculation)
    experience: {
        startDate: "January 1 2020 00:00", // Format: "Month Day Year HH:MM"
        show: true
    },
    
    // Interests/Hobbies
    interests: [
        "Open Source Contributions",
        "Data Analysis",
        "Cloud Analytics",
        "Kubernetes for Data",
        "Machine Learning",
        "Data Visualization",
        "Big Data Processing"
    ],
    
    // Social Media Links
    social: {
        github: "https://github.com/melodymelisa",
        linkedin: "", // Add if available
        medium: "", // Add if available
        twitter: "", // Add if available
        email: "melisamelody02@hotmail.com"
    },
    
    // Open Source Contributions
    openSource: {
        highlight: true,
        description: "Active contributor to data analysis and cloud-native data projects. Passionate about leveraging cloud infrastructure and Kubernetes for data analytics and building scalable data solutions.",
        projects: [
            {
                name: "Melisaweb",
                description: "Working on web-based data analysis projects - building tools and solutions for cloud-native data analytics",
                link: "https://github.com/melodymelisa/Melisaweb"
            },
            {
                name: "Data Analytics",
                description: "Contributing to data analysis tools and scripts - focusing on cloud-based analytics and Kubernetes data workloads",
                link: "https://github.com/melodymelisa"
            },
            {
                name: "Cloud Data Projects",
                description: "Working on cloud data projects - contributing to data pipelines and analytics solutions on Kubernetes",
                link: "https://github.com/melodymelisa"
            }
        ]
    },
    
    // Typed.js Terminal Messages
    terminal: {
        skillSetQuestion: "Skill Set?",
        experienceQuestion: "Experience?",
        interestsQuestion: "My Interests?",
        coolStuffQuestion: "Open Source Contributions?"
    },
    
    // SEO Meta Tags
    seo: {
        description: "Melisa Melody, Data Analyst specializing in Cloud Computing and Kubernetes. Leveraging cloud infrastructure for data analytics and building scalable data solutions.",
        keywords: "Melisa Melody, Data Analyst, Data Analysis, Python, R, SQL, Kubernetes, Docker, AWS, Azure, GCP, Cloud Analytics, Machine Learning, Open Source",
        author: "Melisa Melody"
    },
    
    // Additional Info
    additionalInfo: "Passionate Data Analyst with expertise in data analysis, cloud computing, and Kubernetes. Committed to leveraging cloud infrastructure for data analytics and building scalable data solutions. Active open source contributor focused on data analysis tools and cloud-native data projects."
};

