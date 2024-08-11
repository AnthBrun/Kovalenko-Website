import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import Impressum from './components/ImpressumApp';
import Gallery from './components/GalleryApp';
import './index.css';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<App />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
