import React from 'react';
import ReactDOM from 'react-dom/client';
import {getAllPizza} from "../public/data.js";

const pizzaData = getAllPizza();
console.log(pizzaData); //just for debugging

function App() {
    return <>
        <h1>Hello React!</h1>
        <Pizza />
        </>;
}

function Pizza(){
    return(
        <>
            <h2>Pizza time</h2>
            {pizzaData.map(
                    pizItem =>{
                        return(
                            <>
                                <img src={`../public/${pizItem.photoName}`} alt={`A picture of a ${pizItem.name}`}/>
                                <h2>{pizItem.name}</h2>
                                <p>{pizItem.ingredients}</p>
                            </>
                        );
                    }
                )
            }
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);