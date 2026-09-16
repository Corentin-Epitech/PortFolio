import MainLayout from "./components/layout/MainLayout";

function App() {
    return (
        <MainLayout
            sidebar={
                <div>
                    <h2>Corentin</h2>
                    <p>Développeur Web</p>

                    <hr />

                    <p>Accueil</p>
                    <p>À propos</p>
                    <p>Compétences</p>
                    <p>Projets</p>
                    <p>Expérience</p>
                    <p>Contact</p>
                </div>
            }
        >
            <h1>Accueil</h1>

            <p>
                Contenu de la page.
            </p>
        </MainLayout>
    );
}

export default App;