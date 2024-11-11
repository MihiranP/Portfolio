import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Chip,
    useTheme,
    IconButton,
    Stack,
} from "@mui/material";
import { CheckBox, ChevronRight, GitHub } from "@mui/icons-material";

interface ProjectData {
    title: string;
    description: string[];
    technologies: string[];
    githubLink?: string;
}

const projects: ProjectData[] = [
    {
        title: "Conversational AI Chatbot",
        description: [
            "Engineered a full-stack AI chatbot using Python, React, and FastAPI",
            "Implemented REST API endpoints and PostgreSQL integration for persistent conversation history",
            "Handled user authentication with OAuth and JWTs",
        ],
        technologies: ["Python", "React", "FastAPI", "PostgreSQL", "REST API"],
        githubLink: "https://github.com/MihiranP/Synthetic-LLM-Training",
    },
    {
        title: "LLM From Scratch",
        description: [
            "Built a transformer-based language model from ground up using PyTorch",
            "Implemented attention mechanisms, positional encoding, and multi-head attention",
            "Trained on custom dataset with optimized performance and memory usage",
        ],
        technologies: [
            "PyTorch",
            "Python",
            "Deep Learning",
            "NLP",
            "Transformers",
        ],
        githubLink: "https://github.com/MihiranP/LLM-M",
    },
    {
        title: "Recommendation Letter Tracker",
        description: [
            "Developed a web application for Texas A&M professors to centralize and manage student recommendation letters",
            "Built with Ruby, PostgreSQL, AWS Cloud Storage, and Google OAuth",
            "Achieved over 95% code coverage with automated unit and integration tests",
        ],
        technologies: ["Ruby", "PostgreSQL", "AWS", "Google OAuth", "Testing"],
        githubLink: "https://github.com/MihiranP/Recommendation-Tracker",
    },
    {
        title: "Portfolio Website",
        description: [
            "Developed a modern portfolio website using React, TypeScript, and Material-UI (MUI) to showcase projects, skills, and experiences",
            "Implemented a custom dark theme inspired by Dracula color palette, featuring sleek animations and responsive design",
            "Deployed and maintained the application using GitHub Pages, ensuring continuous availability and easy updates",
        ],
        technologies: ["React", "TypeScript", "Material-UI", "Github Pages"],
        githubLink: "https://github.com/MihiranP/Portfolio",
    },
];

const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: theme.palette.background.default,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                    }}
                >
                    <Typography variant="h2" color="success" gutterBottom>
                        {project.title}
                    </Typography>
                    {project.githubLink && (
                        <IconButton
                            href={project.githubLink}
                            target="_blank"
                            sx={{
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                },
                            }}
                        >
                            <GitHub />
                        </IconButton>
                    )}
                </Box>
                <Stack spacing={1} sx={{ mt: 2, mb: 2 }}>
                    {project.description.map((desc, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                            }}
                        >
                            <ChevronRight
                                sx={{
                                    mt: 0.5,
                                    mr: 1,
                                    color: theme.palette.info.main,
                                    fontSize: "1rem",
                                }}
                            />
                            <Typography variant="body2">{desc}</Typography>
                        </Box>
                    ))}
                </Stack>

                <Box sx={{ mt: "auto" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                        }}
                    >
                        {project.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                    bgcolor: theme.palette.primary.main + "20",
                                    color: theme.palette.primary.main,
                                    "&:hover": {
                                        bgcolor:
                                            theme.palette.primary.main + "30",
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Box>
    );
};

const Projects: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                maxWidth: "1600px",
                margin: "0 auto",
                p: 4,
                minHeight: "100vh",
            }}
        >
            <Typography
                variant="h4"
                color="error"
                sx={{
                    mb: 1,
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                }}
            >
                Projects
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    mb: 4,
                    textAlign: "center",
                    color: theme.palette.primary.main,
                }}
            >
                (Click GitHub Icon to View Repo)
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project) => (
                    <Grid item xs={12} md={4} key={project.title}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
