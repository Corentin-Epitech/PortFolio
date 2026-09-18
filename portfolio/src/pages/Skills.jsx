import "./Skills.css"

import RPGWindow from "../components/ui/RPGWindows";
import equipment from "../data/skills";
import environment from "../data/equipment";

function Skills() {
    return (
        <div className="skills">

            <h1 className="page-title">Équipement</h1>

            <RPGWindow title="Arsenal Technique">

                <div className="skills__grid">

                    {equipment.map((group) => (
                        <div
                            key={group.id}
                            className="skills__category"
                        >

                            <h2 className="skills__category-title">
                                {group.category}
                            </h2>

                            <div className="skills__items">

                                {group.items.map((item) => (
                                    <div
                                        key={item}
                                        className="skills__item"
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </RPGWindow>

            <RPGWindow title="Environnement">

                <div className="skills__environment">

                    {environment.map((group) => (
                        <div
                            key={group.id}
                            className="skills__environment-group"
                        >

                            <h3 className="skills__environment-title">
                                {group.category}
                            </h3>

                            <div className="skills__environment-items">

                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="skills__environment-item"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </RPGWindow>
        </div>
    );
}


export default Skills;