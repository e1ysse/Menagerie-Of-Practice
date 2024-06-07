import React from 'react';
import ReactDOM from 'react-dom/client';
import {getAllPizza} from "../public/data.js";
import './index.css';

const pizzaData = getAllPizza();
console.log(pizzaData); //just for debugging

function App() {
    return <>
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    </>;
}

const Header = () => {
    return(
        <>
            <header  className="header">
                <h1>Fast React Pizza Co.</h1>
            </header>
        </>
    );
};

//moved pizza component to render here
const Menu = () => {
    return(
        <>
            <main className="menu">
                <h2>Our Menu</h2>
                <ul className="pizzas">
                    {pizzaData.map(pizItem =>{
                        let sellOut = pizItem.soldOut ? "sold-out" : "";
                        return(<Pizza pizzaObj = {pizItem} soldOut = {sellOut} key = {pizItem.name}/>);
                    })}
                </ul>
            </main>
        </>
    );
};

//will be utilizing props here instead
function Pizza(props) {
    return (
        <>
            <li className={`pizza ${props.soldOut}`}>
                <img src={props.pizzaObj.photoName} alt={`A picture of a ${props.pizzaObj.name}`}/>
                <div>
                    <h3>{props.pizzaObj.name}</h3>
                    <p>{props.pizzaObj.ingredients}</p>
                    <span>{props.pizzaObj.price}</span>
                </div>
            </li>
        </>
    );
}

const Footer = () => {
    let hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    let availabilityMsg = "There was an error fetching the hours.";
    //now we can just put any js in here lol

    if (hour >= openHour && hour < closeHour) {
        availabilityMsg = "We're currently open!";
    } else {
        availabilityMsg = "We're currently closed.";
    }

    return (
        <>
            <footer className="footer">The time is now {new Date().toLocaleTimeString()}. {availabilityMsg} </footer>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);