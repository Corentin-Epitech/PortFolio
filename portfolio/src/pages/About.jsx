import "./About.css";

import RPGWindow from "../components/ui/RPGWindows";
import stats from "../data/stats";

function About() {
    return (
        <div className="about">

            <h1 className="page-title">À propos</h1>

            <div className="about__layout">

                <RPGWindow
                    title="Personnage"
                    className="about__profile"
                >
                    <div className="about__portrait">
                        Portrait
                    </div>

                    <div className="about__identity">
                        <h2>Corentin</h2>

                        <p>Développeur Web</p>
                    </div>

                    <div className="about__information">
                        <div className="about__information-row">
                            <span className="rpg-label">Classe</span>
                            <strong>Développeur</strong>
                        </div>

                        <div className="about__information-row">
                            <span className="rpg-label">Spécialité</span>
                            <strong>Web Full Stack</strong>
                        </div>

                        <div className="about__information-row">
                            <span className="rpg-label">Localisation</span>
                            <strong>France</strong>
                        </div>
                    </div>
                </RPGWindow>


                <RPGWindow
                    title="Biographie"
                    className="about__biography"
                >
                    <p>
                        Je suis développeur web avec un intérêt
                        particulier pour la création d'applications
                        et la résolution de problèmes techniques.
                    </p>

                    <p>
                        J'apprécie aussi bien le développement frontend
                        que backend et j'aime découvrir de nouvelles
                        technologies à travers mes projets.
                    </p>
                </RPGWindow>


                <RPGWindow title="Statistiques">

                    <div className="about__stats">

                        <div className="about__stats-header">
                            <span>STAT</span>
                            <span>MAX 255</span>
                        </div>

                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="about__stat"
                            >
                                <span className="about__stat-name">
                                    {stat.name}
                                </span>

                                <span className="about__stat-value">
                                    {String(stat.value).padStart(2, "0")}
                                </span>
                            </div>
                        ))}

                    </div>

                </RPGWindow>


                <RPGWindow title="Objectifs">
                    <p className="about__objective">
                        Continuer à développer mes compétences
                        techniques et participer à des projets
                        web me permettant de progresser aussi bien
                        en frontend qu'en backend.
                    </p>
                </RPGWindow>

            </div>

        </div>
    );
}

export default About;