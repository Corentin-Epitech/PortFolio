import { useState } from "react";

import "./Contact.css";

import RPGWindow from "../components/ui/RPGWindows";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(
                "https://formspree.io/f/mgaokzeo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi");
            }

            setSubmitStatus("success");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="contact">

            <h1 className="page-title">Contact</h1>

            <div className="contact__layout">

                <RPGWindow title="Coordonnées">
                    <div className="contact__information">

                        <div className="contact__info">
                            <span>Email</span>

                            <a href="mailto:courtine.corentin@gmail.com">
                                courtine.corentin@gmail.com
                            </a>
                        </div>

                        <div className="contact__info">
                            <span>GitHub</span>

                            <a
                                href="https://github.com/Corentin-Epitech"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mon GitHub
                            </a>
                        </div>

                        <div className="contact__info">
                            <span>LinkedIn</span>

                            <a
                                href="https://www.linkedin.com/in/corentin-courtine-30b5771b0/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mon LinkedIn
                            </a>
                        </div>

                    </div>

                    <div className="contact__availability">
                        <span className="contact__status" />

                        Disponible pour une alternance
                    </div>

                </RPGWindow>


                <RPGWindow title="Envoyer un message">

                    <form
                        className="contact__form"
                        onSubmit={handleSubmit}
                    >

                        <div className="contact__field">
                            <label htmlFor="name">
                                Nom
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="contact__field">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="contact__field">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>



                        <button className="rpg-button contact__submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                        </button>

                        {submitStatus === "success" && (
                            <p className="contact__success" role="status">
                                Message envoyé avec succès !
                            </p>
                        )}

                        {submitStatus === "error" && (
                            <p className="contact__error" role="alert">
                                Une erreur est survenue. Veuillez réessayer.
                            </p>
                        )}

                    </form>

                </RPGWindow>

            </div>

        </div>
    );
}

export default Contact;