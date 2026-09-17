import "./Skills.css"

import RPGWindow from "../components/ui/RPGWindows";
import StatBar from "../components/ui/StatBar";

function Skills() {
    return (
        <div>
            <h1>Compétences</h1>
            <div className="skills__grid">
            <RPGWindow title="Frontend">
                <div className="skills__stats">
                    <StatBar label="HTML / CSS" value={60} />
                    <StatBar label="Javascript" value={80} />
                    <StatBar label="React" value={45} />
                </div>
            </RPGWindow>
            <RPGWindow title="Backend">
                <div className="skills__stats">

                        <StatBar label="PHP" value={85} />

                        <StatBar label="Symfony" value={80} />

                        <StatBar label="Node.js" value={70} />

                    </div>
            </RPGWindow>
            <RPGWindow title="Base de données">
                    <div className="skills__stats">

                        <StatBar label="PostgreSQL" value={80} />

                        <StatBar label="MySQL" value={80} />

                    </div>
                </RPGWindow>
            <RPGWindow title="DevOps">
                <div className="skills__stats">

                        <StatBar label="Docker" value={75} />

                        <StatBar label="Git" value={85} />



                    </div>
            </RPGWindow>
            </div>
        </div>
    );
}

export default Skills;