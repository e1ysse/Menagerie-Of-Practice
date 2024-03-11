import {useEffect, useState} from "react"; //need to be imported to use the usestate & useEffect ofc!

function App() {
    //defining a state, so that we can display data from the API
    const [advice, setAdvice] = useState("");

    //the space below is to retrieve data from an API
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice"); //this is a random placeholder api website! it returns a random piece of advice
        const data = await res.json(); //here we convert what res (above) recieves, and turn it to a json
        console.log(data.slip.advice); //log the json to the console & just more specifically getting the advice instead of the object
        setAdvice(data.slip.advice);
    }

    let [num,setNumberOfClicks] = useState(0); // the initial state will start at 0! also using let becasue i need to update the variable a lot, has no quotation marks bc its a number
    async function getNumberOfClicks(){ //followed the format of the advice
        setNumberOfClicks(++num); //updating to add one everytime the button is pressed
        console.log("Updated number!"); //also logging it to make sure it works
    }

    useEffect(() => { //to have advice load in with page instead of blank
        getAdvice(); //function to carry out
    }, []); //need the [], else it loops out of control

    return(
        <div>
            <h1>An Impossible Product</h1>
            <h2>{advice}</h2> {/* this is where we will change the value based on the setAdvice fucntion. it also just doesnt appear at all on the webpage until you click the button*/}
            <Message num={num} /> {/* now here is where i put my new component made form the function Message, i have also passed num as a prop to the function, so now i need to accept it*/}
            <button onClick={()=>{
                getNumberOfClicks(); //i wanted to call multiple functions, so i used an annoymous function to call both!
                getAdvice();
            }}>hit the slay button (for advice)</button>
            {/*hey here's how to comment btw! anyways the onclick attribute just makes the button carry out the function
            inside the curly braces when it's clicked*/}
        </div>
    );
}
function Message(props){
    return (
        <p>You have clicked this button {props.num} times!</p> //here i just put the variable from the function. just like above
    );
}
export default App //needed to render