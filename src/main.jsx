import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import Dashboard from "./page/Dashboard/Dashboard.jsx";
import Login from "./page/Authentication/Login.jsx";
import Register from "./page/Authentication/Register.jsx";
import Account from "./page/Account/Account.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter future={{v7_startTransition: true}}>
            <App>
                <Routes>
                    <Route path="/" element={<Dashboard/>} id={0}/>
                    <Route path="/account" element={<Account/>} id={1}/>
                    <Route path="/login" element={<Login/>} id={2}/>
                    <Route path="/register" element={<Register/>} id={3}/>
                </Routes>
            </App>
        </HashRouter>
    </StrictMode>
)
