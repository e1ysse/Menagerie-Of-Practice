import React from 'react'
import ReactDOM from 'react-dom/client'
import {Steps} from "./Components/Steps.jsx";

function App() {
    return(
        <Steps/>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)