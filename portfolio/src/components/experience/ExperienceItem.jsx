import "./ExperienceItem.css";

function ExperienceItem({ experience }) {
    return (
        <article className="experience-item">

            <div className="experience-item__marker">
                <div className="experience-item__dot" />
                <div className="experience-item__line" />
            </div>

            <div className="experience-item__content">

                <div className="experience-item__header">

                    <span className="experience-item__period">
                        {experience.period}
                    </span>

                    <span className="experience-item__type">
                        {experience.type}
                    </span>

                </div>

                <h2 className="experience-item__title">
                    {experience.title}
                </h2>

                <p className="experience-item__organization">
                    {experience.organization}
                </p>

                <p className="experience-item__description">
                    {experience.description}
                </p>

                <div className="experience-item__technologies">

                    {experience.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="experience-item__technology"
                        >
                            {technology}
                        </span>
                    ))}

                </div>

            </div>

        </article>
    );
}

export default ExperienceItem;