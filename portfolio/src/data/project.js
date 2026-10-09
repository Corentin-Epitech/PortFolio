import Corelab from "../assets/Project_Thumbnail/Corelab.png"
import Klivio from "../assets/Project_Thumbnail/klivio.png"
import Overkill from "../assets/Project_Thumbnail/Overkill.png"


const projects = [
    {
        id: 1,
        image: Overkill,
        title: "Overkill",
        type: "Application Web",
        Status: "Projet Scolaire",
        shortDescription: "Plateforme web d’agrégation d’offres d’emploi, de stage et d’alternance.",
        description:
            "OVERKILL est une plateforme web d’agrégation d’offres d’emploi, de stage et d’alternance. Elle collecte des annonces externes, les normalise dans un catalogue homogène et propose des outils pour rechercher, comparer et suivre ses opportunités. Le produit a été développé dans le cadre d'un projet Epitech, en partenariat avec WeLoveDevs. Il réunit une interface responsive, une API REST sécurisée, un pipeline d’ingestion de données et une analyse de CV assistée par un modèle d’IA exécuté localement.",
        technologies: ["React", "Symfony", "PostgreSQL", "n8n"],
        github: "https://github.com/EpitechWebAcademiePromo2027/W-YEP-200-PAR-2-1-job_aggregator-2",
        website: "#",
        online:false,
    },
    {
        id: 2,
        image:Corelab,
        title: "Corelab",
        type: "Application Web",
        Status: "Projet Scolaire",
        shortDescription: "Plateforme LMS développée avec la stack MERN.",
        description:
            "Corelab est une plateforme LMS (Learning Management System) développée avec la stack MERN. Elle permet de gérer des utilisateurs, des cours, des leçons et des quiz depuis une interface web React connectée à une API Express et une base MongoDB.",
        technologies: ["React", "Vite", "CSS","Express.js","MongoDB"],
        github: "https://github.com/EpitechWebAcademiePromo2027/W-WEB-201-PAR-2-1-corelab-9",
        website: "#",
        online:false,
    },
    {
        id: 3,
        image: Klivio,
        title: "Klivio",
        type: "Application Web",
        Status: "Projet Scolaire",
        shortDescription: "Reproduction d'une page d'accueil à partir d'une maquette.",
        description:
            "Reproductions d'une page d'accueil à partir d'une maquette en CSS et HTML.",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/Corentin-Epitech/site-statique",
        website: "https://corentin-epitech.github.io/site-statique/",
        online:true,
    },
];

export default projects;