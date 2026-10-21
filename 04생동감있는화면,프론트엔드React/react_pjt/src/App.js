
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/page/Login';
import Welcome from './component/page/Welcome';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
    );
}

export default App;
