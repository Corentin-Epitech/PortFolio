import "./RPGWindows.css";

function RPGWindow({ title, children, className = "" }) {
    return (
        <section className={`rpg-panel rpg-window ${className}`}>
            {title && (
                <div className="rpg-window__header">
                    <h2 className="rpg-window__title">
                        {title}
                    </h2>
                </div>
            )}

            <div className="rpg-window__content">
                {children}
            </div>
        </section>
    );
}

export default RPGWindow;