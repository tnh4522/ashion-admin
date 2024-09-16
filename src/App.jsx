import SideBar from "./layout/SideBar.jsx";

function App({children}) {
    const href = window.location.href;
    if (href.includes("login") || href.includes("register")) {
        return (
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SideBar/>
                {children}
            </div>
        </div>
    )
}

export default App
