import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Weather App",
        description:
            "Get accurate, real-time weather updates and forecasts in a simple, easy-to-use app.",
        image: "/projects/Project3.png",
        tags: ["React Native", "TailwindCSS", "API"],
        demoUrl: "#",
        githubUrl: "https://github.com/vatsalvaghasia/weather_app",
    },
    {
        id: 2,
        title: "Chat App",
        description:
            "Stay connected with real-time messaging, all in one easy app.",
        image: "/projects/Project2.png",
        tags: ["React Native", "TailwindCSS", "Firebase", "Authentication"],
        demoUrl: "#",
        githubUrl: "https://github.com/vatsalvaghasia/chat-app",
    },
    {
        id: 3,
        title: "Cart Grow",
        description:
            "Fully responsive website to showcase my front-end development skills in layout, design, and interactivity",
        image: "/projects/Project1.png",
        tags: ["Bootstrap", "CSS", "Javascript", "HTML"],
        demoUrl: "https://vatsalvaghasia.github.io/Cart-Grow/project/",
        githubUrl: "#",
    },
];

export const ProjectsSection = (params) => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-width-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transiton-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="rounded-full px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    {" "}
                                    <div className="flex space-x-3">
                                        <a
                                            target="__blank"
                                            href={project.demoUrl}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink />
                                        </a>
                                        <a
                                            target="__blank"
                                            href={project.githubUrl}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        target="_blank"
                        href="https://github.com/vatsalvaghasia"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
