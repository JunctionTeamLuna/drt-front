import { Route, Routes } from "react-router-dom";
import "./App.css";
import Head from "./pages/head";
import Main from "./pages/main";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <div className="app-container">
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<Head />}></Route>
                    <Route path="/main" element={<Main />}></Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
