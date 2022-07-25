import { useState } from "react";
import "./Votes.css";

function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);

    const [chocolateAverage, setChocolateAverage] = useState(0);
    const [vanillaAverage, setVanillaAverage] = useState(0);
    const [strawberryAverage, setStrawberryAverage] = useState(0);

    const [totalVotes, setTotalVotes] = useState(0)

    const calculateAverages = () => {
        setChocolateAverage((chocolateVotes/totalVotes) * 100);
        setVanillaAverage((vanillaVotes/totalVotes) * 100);
        setStrawberryAverage((strawberryVotes/totalVotes) * 100);
    }

    

    const chocolateButtonHandler = () => {
        setTotalVotes(prevTotal => prevTotal += 1);
        setChocolateVotes(prevVotes => prevVotes += 1);
        calculateAverages();
    }

    const vanillaButtonHandler = () => {
        setTotalVotes(prevTotal => prevTotal += 1);
        setVanillaVotes(prevVotes => prevVotes += 1);
        calculateAverages();
    }

    const strawberryButtonHandler = () => {
        setTotalVotes(prevTotal => prevTotal += 1);
        setStrawberryVotes(prevVotes => prevVotes += 1);
        calculateAverages();
    }

    return (
        <div>
            <h1>Vote Here</h1>
            <div>
                <button onClick={chocolateButtonHandler}>Chocolate</button>     
                <button onClick={vanillaButtonHandler}>Vanilla</button>
                <button onClick={strawberryButtonHandler}>Strawberry</button>
                <p>{(chocolateVotes === 0 && vanillaVotes === 0 && strawberryVotes === 0 && 'No votes yet')}</p>
                <p>{(chocolateVotes > 0 && `Chocolate: ${chocolateVotes}  %${chocolateAverage.toFixed(1)}`)}</p>
                <div className="chocolate-bar" style={{width: `${chocolateAverage}%`}}></div>
                <p>{(vanillaVotes > 0 && `Vanilla: ${vanillaVotes}  %${vanillaAverage.toFixed(1)}`)}</p>
                <div className="vanilla-bar" style={{width: `${vanillaAverage}%`}}></div>
                <p>{(strawberryVotes > 0 && `Strawberry: ${strawberryVotes}  %${strawberryAverage.toFixed(1)}`)}</p>
                <div className="strawberry-bar" style={{width: `${strawberryAverage}%`}}></div>
            </div>
        </div>
    )
}

export default Votes;