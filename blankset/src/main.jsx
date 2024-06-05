import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {getSkillList} from "../public/skills.js";

const skillList = getSkillList();
function App() { //literally ew fix the border and whitespcae. also add aria and alt text. TODO
    return(
        <>
            <div className="card">
                <Pfp />
                <Introduction />
                <Dropdown/>
            </div>
        </>
    );
}

const Pfp = () =>{
    return(
        <>
            <img src={"https://placehold.co/400"} className="pfp" />
        </>
    );
}

const Introduction = () => {
    return(
        <>
            <h2>hello :) i'm elysse</h2>
            <h3>Software Engineer | Accessibility Advocate | UX Design </h3>
            <p>I'm definitely going to put a description here defintitely mhm it will have no spelling errors ever i dont even know what a spelling error is actually. I will also have good punctu.. puntun... punctuation?? yeah that. this is a very long placeholder.</p>
        </>
    );
}

const Dropdown = () => { //gonna hold all the optional information in a collapsible form
    return(
        <>
            <Skillset />
            <Quickfacts />
            <Table />
            <ExperienceBars />
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
