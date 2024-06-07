import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {getSkillList} from "../public/skills.js";

const skillList = getSkillList();
function App() {
    return(
        <>
            <div className="card">
                <Pfp />
                <Introduction />
                <Skillset />
                <Dropdown/>
            </div>
        </>
    );
}

const Pfp = () =>{
    return(
        <>
            <img src={"https://placehold.co/400"} className="pfp"  alt={"This is just a blank place holder image."}/>
        </>
    );
}

const Introduction = () => {
    return(
        <>
            <h2>hello :) i'm elysse</h2>
            <h3>Software Engineer | Accessibility Advocate | UX Design </h3>
            <p>I'm a senior computer science major, with a passion for UX and accessible softwares. I'm most interested in Front End development, with experience in React, Vite, and Javascript, but I also have knowledge in Java, SQL, and data structures. </p>
        </>
    );
}

const Dropdown = () => { //gonna hold all the optional information in a collapsible form. will work on this later
    return(
        <>
            <div className="drop-down">
                <Quickfacts />
                <Table />
                <ExperienceBars />
            </div>
        </>
    );
}

const Skillset = () => {
    return(
        <>
            <div className="skill-list">
                {skillList.map(skill => {
                    let currentColor = {color: `${skill.textColor}`, backgroundColor: `${skill.color}`};
                    return (
                        <div style={currentColor} className="skill">
                            <span>{skill.name}</span>
                        </div>
                    );
                })}
            </div>

        </>
    );
}

const ExperienceBars = () => { //for each programming language. maybe a circle chart instead
    return(
        <>

        </>
    );
}

const Table = () => { //as in what do i bring to the table
    return(
        <>

        </>
    );
}

const Quickfacts = () => { //WHEN DO U GRDTE. WHERE LIVE. WHAT PASSION. HOW OLD ARE U. WHY ARE YOU EATING COOKIES.
    return(
        <>

        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
