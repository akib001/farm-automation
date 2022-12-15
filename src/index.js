import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import {SWRConfig} from 'swr';
import {BrowserRouter} from "react-router-dom";

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://farmautomationserver.cyclic.app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SWRConfig value={{fetcher: (url) => axios(url).then((r) => r.data)}}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SWRConfig>
    </React.StrictMode>
);

