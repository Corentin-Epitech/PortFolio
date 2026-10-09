import "./StatBar.css";

function StatBar({ label, value, max = 100 }) {
    const percentage = (value / max) * 100;

    return (
        <div className="stat-bar">

            <div className="stat-bar__info">
                <span className="stat-bar__label">
                    {label}
                </span>

                <span className="stat-bar__value">
                    {value}
                </span>
            </div>

            <div className="stat-bar__track">
                <div
                    className="stat-bar__fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>

        </div>
    );
}

export default StatBar;