import "./ProjectDetails.css";

function ProjectDetails({ project }) {
    return (
        <div className="project-details">

            <span className="project-details__type">
                {project.type}
            </span>

            <div className="project-details__preview">
                Aperçu du projet
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
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                )}

                {project.website && (
                    <a
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