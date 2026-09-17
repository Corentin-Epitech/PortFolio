import "./Sidebar.css";

function Sidebar({ currentPage, setCurrentPage }) {
    return (
        <div className="sidebar">

            <div className="sidebar__profile">
                <h1 className="sidebar__name">
                    Corentin
                </h1>

                <p className="sidebar__job">
                    Développeur Web
                </p>

                <div className="sidebar__level">
                    LV. 26
                </div>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <span>HP</span>

                        <div className="sidebar__stat-bar">
                            <div className="sidebar__stat-fill sidebar__stat-fill--hp" />
                        </div>
                    </div>

                    <div className="sidebar__stat">
                        <span>MP</span>

                        <div className="sidebar__stat-bar">
                            <div className="sidebar__stat-fill sidebar__stat-fill--mp" />
                        </div>
                    </div>
                </div>
            </div>

            <nav className="sidebar__navigation">
                <button className={`sidebar__menu-item ${currentPage === "home"
                    ? "sidebar__menu-item--active"
                    : ""
                    }`}
                    onClick={() => setCurrentPage("home")}>
                    Accueil
                </button>

                <button className={`sidebar__menu-item ${currentPage === "about" ? "sidebar__menu-item--active" : ""
                    }`}
                    onClick={() => setCurrentPage("about")}>
                    À propos
                </button>

                <button className={`sidebar__menu-item ${currentPage === "skills"
                    ? "sidebar__menu-item--active"
                    : ""
                    }`}
                    onClick={() => setCurrentPage("skills")}>
                    Compétences
                </button>

                <button className={`sidebar__menu-item ${currentPage === "projects" ? "sidebar__menu-item--active" : ""
                    }`}
                    onClick={() => setCurrentPage("projects")}>
                    Projets
                </button>

                <button className={`sidebar__menu-item ${currentPage === "experience" ? "sidebar__menu-item--active" : ""
                    }`}
                    onClick={() => setCurrentPage("experience")}>
                    Expérience
                </button>

                <button className={`sidebar__menu-item ${currentPage === "contact" ? "sidebar__menu-item--active" : ""
                    }`}
                    onClick={() => setCurrentPage("contact")}>
                    Contact
                </button>
            </nav>

            <div className="sidebar__footer">
                <button className="sidebar__menu-item">
                    Paramètres
                </button>
            </div>

        </div>
    );
}

export default Sidebar;