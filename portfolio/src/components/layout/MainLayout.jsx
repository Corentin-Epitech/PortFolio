import "./MainLayout.css";

function MainLayout({ sidebar, children }) {
    return (
        <div className="main-layout">
            <aside className="main-layout__sidebar">
                {sidebar}
            </aside>

            <main className="main-layout__content">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;