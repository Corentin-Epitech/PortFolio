import { useState } from "react";

import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/layout/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
    const [currentPage, setCurrentPage] = useState("Home");

    function renderPage() {
        switch (currentPage) {
            case "about":
                return <About />;

            case "skills":
                return <Skills />;

            case "projects":
                return <Projects />;

            case "experience":
                return <Experience />;

            case "contact":
                return <Contact />;

            case "home":
            default:
                    return <Home setCurrentPage={setCurrentPage} />;
        }
    }

    return (
        <MainLayout
            sidebar={<Sidebar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            }
        >
            {renderPage()}
        </MainLayout>
    );
}

export default App;