import "./Skills.css"

import RPGWindow from "../components/ui/RPGWindows";
import equipment from "../data/skills";

function Skills() {
    return (
        <div className="skills">

            <h1>Équipement</h1>

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

        </div>
    );
}


export default Skills;