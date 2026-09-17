import RPGWindow from "../components/ui/RPGWindows";

function Skills() {
    return (
        <div>
            <h1>Compétences</h1>

            <RPGWindow title="Frontend">
                React
            </RPGWindow>
            <RPGWindow title="Backend">
                Symfony
            </RPGWindow>
            <RPGWindow title="DevOps">
                Docker
            </RPGWindow>
        </div>
    );
}

export default Skills;