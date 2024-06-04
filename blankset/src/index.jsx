import React from 'react';
import ReactDOM from 'react-dom/client';
import {getAllPizza} from "../public/data.js";

const pizzaData = getAllPizza();
console.log(pizzaData); //just for debugging

function App() {
    return <>
        <Header />
        <Menu />
        <Footer />
        </>;
}

//i was only just informed I could've been using arrow functions. so uh. heres to the sudden change
const Header = () => {
    return(
        <>
            <h1>Fast React Pizza Co.</h1>
        </>
    );
};

//moved pizza component to render here
const Menu = () => {
    return(
        <>
            <h2>Our Menu</h2>
            <Pizza />
        </>
    );
};

const Footer = () => {
    let hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    let availabilityMsg = "There was an error fetching the hours.";
    //now we can just put any js in here lol

    if(hour >= openHour && hour < closeHour){
        availabilityMsg = "We're currently open!";
    }else{
        availabilityMsg = "We're currently closed.";
    }

    return(
        <>
            <footer>The time is now {new Date().toLocaleTimeString()}. {availabilityMsg} </footer>
        </>
    );
}; //yes i add semicolons to everything. Its easier to debug this way

function Pizza(){
    return(
        <>
            {pizzaData.map(
                    pizItem =>{
                        return(
                            <>
                                <img src={`${pizItem.photoName}`} alt={`A picture of a ${pizItem.name}`}/>
                                <h2>{pizItem.name}</h2>
                                <p>{pizItem.ingredients}</p>
                            </> //i couldnt tell you why but watch this like a hawk. it keeps trying to become some other thing like footer or header. anything but a fragment
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