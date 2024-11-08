import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Stack,
    Chip,
    Collapse,
    IconButton,
} from "@mui/material";
import {
    Work,
    School,
    Code,
    ChevronRight,
    ExpandMore,
} from "@mui/icons-material";
import theme from "../theme/theme";

const experiences = [
    {
        title: "L1 Software Engineer",
        company: "Credera Enterprises Company",
        location: "Houston, TX",
        date: "August 2023 - Current",
        type: "work",
        points: [
            "Engineered embedded image processing capabilities for a fullstack LLM-based conversational AI application in Rust, leveraging Azure OpenAI via RESTful APIs. Optimized performance through parallelized, multithreaded requests, significantly improving RAG retrieval accuracy.",
            "Developed an AI-powered resume-building chatbot for a recruitment agency using Python, React, and LangChain. Implemented distributed computing with AWS EC2 instances and EKS for scalability and performance resulting in projected $1.5M in annual savings.",
            "Developed a supply-chain policy generation application with Python, Fast API, and React, integrating AWS Bedrock and EKS to streamline and automate the policy creation process.",
            "Led bi-weekly AI technology seminars, enhancing team-wide AI literacy and fostering innovation, leading to the initiation of new AI-driven projects.",
        ],
    },
    {
        title: "Undergraduate Research Assistant",
        company: "Texas A&M University",
        location: "College Station, TX",
        date: "August 2022 - May 2023",
        type: "research",
        points: [
            "Conducted comprehensive study on human-autonomous vehicle interactions, designing and executing 2 distinct experiments to assess driver behavior and trust.",
            "Performed advanced data analysis on multi-modal datasets, including ECG, eye-tracking, and driving simulator data, using Python and pandas to extract meaningful insights.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Credera Enterprises Company",
        location: "Houston, TX",
        date: "June 2022 - August 2022",
        type: "work",
        points: [
            "Collaborated with a team of interns in redesigning CenterPoint Energy's homepage, interacting directly with executives to define project requirements and redesign goals for a platform serving 3M customers.",
            "Engineered a high-performance frontend using Next.js and Contentful CMS, implementing server-side rendering to increase Lighthouse performance metrics by over 20%.",
            "Delivered exceptional results that secured a new contract for a comprehensive website overhaul, demonstrating strong technical skills and ability to exceed client expectations.",
        ],
    },
    {
        title: "Teaching Assistant",
        company: "Texas A&M University",
        logo: "/path/to/tamu-logo.png",
        location: "College Station, TX",
        date: "August 2020 - May 2022",
        type: "education",
        points: [
            "Instructed 100+ students in object-oriented programming, computational thinking, and software engineering principles using Python, C++, and C in weekly learning sessions.",
        ],
    },
];

const ExperienceSection = () => {
    const getIcon = (type: string) => {
        switch (type) {
            case "work":
                return <Work />;
            case "research":
                return <School />;
            default:
                return <Code />;
        }
    };
    interface ExpandedStates {
        [key: number]: boolean;
    }

    const [expandedStates, setExpandedStates] = useState<ExpandedStates>({});
    const handleExpandClick = (index: number) => {
        setExpandedStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", p: 4 }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ mb: 4, textAlign: "center" }}
            >
                Experiences
            </Typography>

            <Stack spacing={3}>
                {experiences.map((exp, index) => (
                    <Card
                        key={index}
                        onClick={() => handleExpandClick(index)}
                        sx={{
                            "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: 3,
                                transition: "all 0.2s ease-in-out",
                                backgroundColor: theme.palette.background.paper,
                            },
                            backgroundColor: theme.palette.background.default,
                        }}
                    >
                        <CardContent>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: expandedStates[index] ? 2 : 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        mr: 2,
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        borderRadius: "50%",
                                        p: 1,
                                        display: "flex",
                                    }}
                                >
                                    {getIcon(exp.type)}
                                </Box>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            color: theme.palette.success.main,
                                        }}
                                    >
                                        {exp.title}
                                    </Typography>
                                    <Typography
                                        color={theme.palette.secondary.main}
                                    >
                                        {exp.company} • {exp.location}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color={theme.palette.secondary.main}
                                    >
                                        {exp.date}
                                    </Typography>
                                </Box>
                            </Box>

                            <Collapse
                                in={expandedStates[index]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <Stack spacing={1} sx={{ mt: 2 }}>
                                    {exp.points.map((point, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <ChevronRight
                                                sx={{
                                                    mt: 0.5,
                                                    mr: 1,
                                                    color: theme.palette.info
                                                        .main,
                                                    fontSize: "1rem",
                                                }}
                                            />
                                            <Typography variant="body2">
                                                {point}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>

                                {exp.type === "work" && (
                                    <Box sx={{ mt: 2 }}>
                                        <Chip
                                            size="small"
                                            label="Full-time"
                                            sx={{
                                                mr: 1,
                                                backgroundColor:
                                                    theme.palette.primary.main,
                                            }}
                                        />
                                    </Box>
                                )}
                            </Collapse>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
};

export default ExperienceSection;
