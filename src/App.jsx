import SideBar from "./layout/SideBar.jsx";

function App({children}) {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SideBar/>
                {children}
            </div>

            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    )
}

export default App
