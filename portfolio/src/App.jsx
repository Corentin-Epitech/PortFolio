import MainLayout from "./components/layout/MainLayout";
import Sidebar
 from "./components/layout/Sidebar";
function App() {
    return (
        <MainLayout
            sidebar={<Sidebar />
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