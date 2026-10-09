import "./ProjectDetails.css";

function ProjectDetails({ project }) {
    return (
        <div className="project-details">

            <div className="project-details__meta">
                <span>{project.type}</span>

                <span className="project-details__separator">-</span>

                <span>{project.Status}</span>

                <span className="project-details__separator">-</span>

                <span className="project-details__status">
                    {project.online ? "En ligne" : "Hors ligne"}
                </span>
            </div>

            <div className="project-details__preview">
                <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                />
            </div>



            <p className="project-details__description">
                {project.description}
            </p>

            <div className="tech-list">

                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="tech-item"
                    >
                        {technology}
                    </span>
                ))}

            </div>

            <div className="project-details__actions">

                {project.github && (
                    <a
                        className="rpg-button"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                )}

                {project.online && project.website && (
                    <a
                        className="rpg-button"
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Voir le site
                    </a>
                )}

            </div>

        </div>
    );
}

export default ProjectDetails;