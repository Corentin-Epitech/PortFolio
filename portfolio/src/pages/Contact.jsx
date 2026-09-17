import { useState } from "react";

import "./Contact.css";

import RPGWindow from "../components/ui/RPGWindows";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div className="contact">

            <h1>Contact</h1>

            <div className="contact__layout">

                <RPGWindow title="Coordonnées">
                    <div className="contact__information">

                        <div className="contact__info">
                            <span>Email</span>

                            <a href="mailto:adresse@email.com">
                                adresse@email.com
                            </a>
                        </div>

                        <div className="contact__info">
                            <span>GitHub</span>

                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mon GitHub
                            </a>
                        </div>

                        <div className="contact__info">
                            <span>LinkedIn</span>

                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mon LinkedIn
                            </a>
                        </div>

                    </div>

                    <div className="contact__availability">
                        <span className="contact__status" />

                        Disponible pour de nouvelles opportunités
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


                        <button
                            className="contact__submit"
                            type="submit"
                        >
                            Envoyer
                        </button>

                    </form>

                </RPGWindow>

            </div>

        </div>
    );
}

export default Contact;