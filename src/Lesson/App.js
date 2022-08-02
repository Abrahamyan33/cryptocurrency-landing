import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'
import Layout from "./pages/Layout"
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Store from './pages/Store'
import NoPage from './pages/NoPage'


function App() {
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='blogs' element={<Blogs />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='store' element={<Store />} />
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;