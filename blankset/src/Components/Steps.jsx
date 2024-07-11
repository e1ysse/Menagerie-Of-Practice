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
            setCurrentStep(currentStep - 1);
        }else{
            console.log("cannot go further back!");
        }
    }
    const goForward = () => {
        if (currentStep < 3){
            setCurrentStep(currentStep + 1);
        }else{
            console.log("cannot go any further!");
        }
    }
    return(
        <>
            <button className="close" onClick={()=> setIsOpen(!isOpen)}>&times;</button>
            {isOpen && ( //rember short circutting!
                <div className="steps">
                    <div className="numbers">
                        <div className={`${currentStep >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${currentStep >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${currentStep >= 3 ? "active" : ""}`}>3</div>
                    </div>

                    <p className="message">Step {currentStep}: {messages[currentStep-1]}</p>

                    <div className="buttons">
                        <button style={{backgroundColor: "#7950F2", color: "#FFFFFF"}} onClick={goBack}>Previous</button>
                        <button style={{backgroundColor: "#7950F2", color: "#FFFFFF"}} onClick={goForward}>Next</button>
                    </div>
            </div>
            )}
        </>
    );
}

export {Steps}