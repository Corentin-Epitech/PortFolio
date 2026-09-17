import { useState } from "react";

import "./Projects.css";

import RPGWindow from "../components/ui/RPGWindows";
import projects from "../data/project";
import ProjectDetails from "../components/projects/ProjectDetails";


function Projects() {
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

    const selectedProject = projects.find((project) => project.id ===selectedProjectId);

    return (
        <div className="projects">

            <h1>Projets</h1>

            <div className="projects__layout">

                <RPGWindow
                    title="Mes projets"
                    className="projects__list-window"
                >
                    <div className="projects__list">

                        {projects.map((project) => (
                            <button
                                key={project.id}
                                className={`projects__item ${
                                    selectedProjectId === project.id
                                        ? "projects__item--active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setSelectedProjectId(project.id)
                                }
                            >
                                {project.title}
                            </button>
                        ))}

                    </div>
                </RPGWindow>

                <RPGWindow
                    title={selectedProject.title}
                    className="projects__details-window"
                >
                    <ProjectDetails project={selectedProject} />
                </RPGWindow>

            </div>

        </div>
    );
}

export default Projects;