import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {getSkillList} from "../public/skills.js";
import {Table} from "./Components/table.jsx";
import {ExperienceBars} from "./Components/ExperienceBars.jsx";
import {Quickfacts} from "./Components/QuickFacts.jsx";

const skillList = getSkillList();
function App() {
    return(
        <>
            <div className="card">
                <Pfp />
                <Introduction />
                <Skillset />
                <Dropdown />
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

const Dropdown = () => { //gonna hold all the optional information in a collapsible form. will work on this later
    const [open, setOpen] = useState(false); //create variable open, set to false. when something is used (a useEffect) the setOpen fucntion will activate
    const toggle = () => { // a toggle ofc
        setOpen(!open);
        console.log(open);
    };
    return(
        <>
            <div className="drop-down">
            <button className="drop-down-button" onClick={toggle}> See More Information </button>
            {open && (
                <div>
                    <div>
                        <Quickfacts/>
                    </div>
                    <div>
                        <Table/>
                    </div>
                    <div>
                        <ExperienceBars/>
                    </div>
                </div>
            )/* this is an example of short circuting. if open is false, the condition will auto assume that the 2nd thing,
                * in this case the elements of the dropdown, is true and render them. Then open will be set to true. now if a
                * user clicks again, its gonna see how open is set to true first, which means it will just ignore the 2nd half of
                * the condition, thus it wont render. then after that is done, open is set to false again */ }
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
