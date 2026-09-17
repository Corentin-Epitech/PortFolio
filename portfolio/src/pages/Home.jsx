import "./Home.css";
import projects from "../data/project";

import RPGWindow from "../components/ui/RPGWindows";

function Home({ setCurrentPage }) {

    const featuredProject = projects[0];
    return (


        <div className="home">

            <section className="home__hero">

                <p className="home__eyebrow">
                    Bienvenue sur mon portfolio
                </p>

                <h1 className="home__name">
                    Corentin
                </h1>

                <h2 className="home__job">
                    Développeur Web Full Stack
                </h2>

                <p className="home__introduction">
                    Je développe des applications web en travaillant
                    aussi bien sur leur interface que sur leur
                    fonctionnement côté serveur.
                </p>

                <div className="home__actions">

                    <button
                        onClick={() =>
                            setCurrentPage("projects")
                        }
                    >
                        Voir mes projets
                    </button>

                    <button
                        onClick={() =>
                            setCurrentPage("contact")
                        }
                    >
                        Me contacter
                    </button>

                </div>

            </section>


            <div className="home__grid">

                <RPGWindow title="Spécialisations">

                    <div className="home__specializations">

                        <div className="home__specialization">
                            <span>Frontend</span>
                            <strong>React</strong>
                        </div>

                        <div className="home__specialization">
                            <span>Backend</span>
                            <strong>Symfony</strong>
                        </div>

                        <div className="home__specialization">
                            <span>Base de données</span>
                            <strong>PostgreSQL</strong>
                        </div>

                        <div className="home__specialization">
                            <span>DevOps</span>
                            <strong>Docker</strong>
                        </div>

                    </div>

                </RPGWindow>


                <RPGWindow title="Projet à la une">

                    <div className="home__featured-project">

                        <h3>{featuredProject.title}</h3>

                        <p>
                            {featuredProject.shortDescription}
                        </p>

                        <div className="home__technologies">
                            {featuredProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                        </div>

                        <button
                            onClick={() =>
                                setCurrentPage("projects")
                            }
                        >
                            Voir le projet
                        </button>

                    </div>

                </RPGWindow>

            </div>

        </div>


    );


}

export default Home;