import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {SWRConfig} from 'swr';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://farmautomationserver.cyclic.app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SWRConfig value={{fetcher: (url) => axios(url).then((r) => r.data)}}>
            <App/>
        </SWRConfig>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
