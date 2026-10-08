import "./About.css";

import RPGWindow from "../components/ui/RPGWindows";
import stats from "../data/stats";
import avatar from "../assets/Avatar.png"

function About() {
    return (
        <div className="about">

            <h1 className="page-title">À propos</h1>

            <div className="about__layout">

                <RPGWindow
                    title="Personnage"
                    className="about__profile"
                >


                    <div className="about__character-content">

                        <div className="about__portrait">
                            <img
                                src={avatar}
                                alt="Avatar de Corentin"
                                className="about__avatar"
                            />
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
                        Actuellement en formation de développeur Full Stack à la Web@cademie by Epitech, mon objectif est de continuer à développer mes compétences à travers des projets concrets et de nouvelles expériences.
                        Je recherche aujourd’hui une alternance dans le développement web, qui me permettra de mettre en pratique mes connaissances, de découvrir davantage le fonctionnement d’une équipe de développement et de progresser aussi bien en Front-End qu’en Back-End.
                    </p>
                    <p className="about__objective">
                        À plus long terme, je souhaite devenir un développeur polyvalent, capable de concevoir des applications complètes tout en continuant à découvrir de nouvelles technologies et méthodes de développement.
                    </p>
                </RPGWindow>

            </div>

        </div>
    );
}

export default About;