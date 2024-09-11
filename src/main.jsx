import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import Dashboard from "./page/Dashboard/Dashboard.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter future={{v7_startTransition: true}}>
            <App>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                </Routes>
            </App>
        </HashRouter>
    </StrictMode>
)
