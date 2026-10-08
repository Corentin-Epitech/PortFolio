import "./Sidebar.css";
import { calculateAge, calculateExperience } from "../../utils/PlayerStats";
import { useState } from "react";

function Sidebar({ currentPage, setCurrentPage }) {

    const birthDate = new Date(2000, 0, 4);
    const level = calculateAge(birthDate);
    const experience = calculateExperience(birthDate);
    const [menuOpen, setMenuOpen] = useState(false);

    function handleNavigation(page) {
        setCurrentPage(page);
        setMenuOpen(false);
    }

    return (
        <div className="sidebar">

            <div className="rpg-panel sidebar__profile">
                <h1 className="sidebar__name">
                    Corentin
                </h1>

                <p className="sidebar__job">
                    Développeur Web
                </p>

                <button
                    type="button"
                    className="sidebar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={menuOpen}
                    aria-controls="sidebar-mobile-navigation"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                <div className="sidebar__level">
                    LV. {level}
                </div>
                <div className="sidebar__experience">

                    <span>EXP</span>

                    <div className="sidebar__experience-bar">
                        <div
                            className="sidebar__experience-fill"
                            style={{
                                width: `${experience}%`,
                            }}
                        />
                    </div>

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

            <div
                id="sidebar-mobile-navigation"
                className={`sidebar__menu ${menuOpen ? "sidebar__menu--open" : ""
                    }`}
            >

                <nav id="sidebar-mobile-navigation"
                    className={`rpg-panel sidebar__navigation ${menuOpen ? "sidebar__navigation--open" : ""
                        }`}>
                    <button className={`sidebar__menu-item ${currentPage === "home"
                        ? "sidebar__menu-item--active"
                        : ""
                        }`}
                        onClick={() => handleNavigation("home")}>
                        Accueil
                    </button>

                    <button className={`sidebar__menu-item ${currentPage === "about" ? "sidebar__menu-item--active" : ""
                        }`}
                        onClick={() => handleNavigation("about")}>
                        À propos
                    </button>

                    <button className={`sidebar__menu-item ${currentPage === "skills"
                        ? "sidebar__menu-item--active"
                        : ""
                        }`}
                        onClick={() => handleNavigation("skills")}>
                        Compétences
                    </button>

                    <button className={`sidebar__menu-item ${currentPage === "projects" ? "sidebar__menu-item--active" : ""
                        }`}
                        onClick={() => handleNavigation("projects")}>
                        Projets
                    </button>

                    <button className={`sidebar__menu-item ${currentPage === "experience" ? "sidebar__menu-item--active" : ""
                        }`}
                        onClick={() => handleNavigation("experience")}>
                        Expérience
                    </button>

                    <button className={`sidebar__menu-item ${currentPage === "contact" ? "sidebar__menu-item--active" : ""
                        }`}
                        onClick={() => handleNavigation("contact")}>
                        Contact
                    </button>
                </nav>

                <div className={`rpg-panel sidebar__footer ${menuOpen ? "sidebar__footer--open" : ""
                    }`}>
                    <button className="sidebar__menu-item">
                        Paramètres
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;