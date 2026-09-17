import "./About.css";

import RPGWindow from "../components/ui/RPGWindows";

function About() {
    return (
        <div className="about">

            <h1>À propos</h1>

            <div className="about__layout">

                <RPGWindow
                    title="Profil"
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
                        <div>
                            <span>Classe</span>
                            <strong>Développeur</strong>
                        </div>

                        <div>
                            <span>Spécialité</span>
                            <strong>Web Full Stack</strong>
                        </div>

                        <div>
                            <span>Localisation</span>
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


                <RPGWindow title="Intérêts">
                    <div className="about__interests">

                        <div className="about__interest">
                            <span>🎮</span>
                            <p>Jeux vidéo</p>
                        </div>

                        <div className="about__interest">
                            <span>💻</span>
                            <p>Développement</p>
                        </div>


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