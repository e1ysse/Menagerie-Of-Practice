import React from "react";
import "./table.css"

const Table = () => { //as in what do i bring to the table
    return(
        <>
            <h2>What I bring to the table: </h2>
            <div className="table-rating">
                <h4> Reliability, Hard Work, Tenacity </h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                </span>
            </div>
            <div className="table-rating">
                <h4> Creativity and Fresh Perspectives </h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                </span>
            </div>
            <div className="table-rating">
                <h4> Eagerness to Learn</h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                </span>
            </div>
            <div className="table-rating">
                <h4> Open Minded and Warm Attitude</h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                </span>
            </div>
            <div className="table-rating">
                <h4> Jokes (definitely not puns) </h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={false}/>
                </span>
            </div>
            <div className="table-rating">
                <h4> Spelling Words Without Googling Them First </h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={false}/>
                    <Star fill={false}/>
                </span>
            </div>
            <div className="table-rating">
                <h4> Ability to Digest Milk </h4>
                <span className="star-container">
                    <Star fill={true}/>
                    <Star fill={true}/>
                    <Star fill={false}/>
                    <Star fill={false}/>
                    <Star fill={false}/>
                </span>
            </div>
        </>
    );
}

const Star = (props) => { //each individual star that will have a unique color
    return (
        <>
            <span>
                <div className="stars">
                    {props.fill ? (
                        <img src="/Assets/filled_star.png" alt={"A filled star"}/>
                    ) : (
                        <img src="/Assets/unfilled_star.png" alt={"An unfilled star"}/>
                    )}
                </div>
            </span>
        </>
    );
}


export {Table}