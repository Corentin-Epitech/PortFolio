import "./Experience.css";

import RPGWindow from "../components/ui/RPGWindows";
import ExperienceItem from "../components/experience/ExperienceItem";

import experiences from "../data/experience";

function Experience() {
    return (
        <div className="experience">

            <h1 className="page-title">Expérience</h1>

            <RPGWindow title="Parcours">

                <div className="experience__timeline">

                    {experiences.map((experience) => (
                        <ExperienceItem
                            key={experience.id}
                            experience={experience}
                        />
                    ))}

                </div>

            </RPGWindow>

        </div>
    );
}

export default Experience;