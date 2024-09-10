import React, {useState} from "react";
import "./Steps.css"

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
const Steps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    const goBack = () => {
        if (currentStep > 1){
            //setCurrentStep(currentStep - 1); //this works fine but its not really good practiec; see below method.
            setCurrentStep((s)=> s - 1);
        }else{
            console.log("cannot go further back!");
        }
    }
    const goForward = () => {
        if (currentStep < 3){
            //setCurrentStep(currentStep + 1); //this is one way to do it. And it works. Unless u wanna go ahead 2 steps by calling the function again
            //so a good practice is to write it with a callbak
            setCurrentStep((s) => s + 1); //this is good practice and does the same as above. something about states. the s can be anything lol
        }else{
            console.log("cannot go any further!");
        }
    }
    return(
        <>
            {/*<button className="close" onClick={()=> setIsOpen(!isOpen)}>&times;</button>
        the above works fine again, but good practice would be the one below:*/}
            <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
            {isOpen && ( //rember short circutting!
                <div className="steps">
                    <div className="numbers">
                        <div className={`${currentStep >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${currentStep >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${currentStep >= 3 ? "active" : ""}`}>3</div>
                    </div>

                    <p className="message">Step {currentStep}: {messages[currentStep - 1]}</p>

                    <div className="buttons">
                        <button style={{backgroundColor: "#7950F2", color: "#FFFFFF"}} onClick={goBack}>Previous
                        </button>
                        <button style={{backgroundColor: "#7950F2", color: "#FFFFFF"}} onClick={goForward}>Next</button>
                    </div>
                </div>
            )}
        </>
    );
}

export {Steps}