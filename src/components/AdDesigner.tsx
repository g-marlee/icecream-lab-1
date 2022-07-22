import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./AdDesigner.css";



function AdDesigner() {
    const [flavor, setFlavor] = useState("Strawberry");
    const [mode, setMode] = useState("-light");

    const handleChocolateButton = () => {
        setFlavor("Chocolate");
    }

    const handleVanillaButton = () => {
        setFlavor("Vanilla");
    }

    const handleStrawberryButton = () => {
        setFlavor("Strawberry");
    }

    const handleLightButton = () => {
        setMode("-light");
    }
    
    const handleDarkButton = () => {
        setMode("-dark");
    }
    return (<div style={{marginLeft: '8px'}}>
            <h2 className="caveat-font">Ad Designer</h2>
            <div className= {"ad" + mode} style={{display: 'flex', flexDirection: 'column', textAlign: 'center', border: '2px solid black', width: "110px"}}>
                <p>Vote For</p><h3>{flavor}</h3>
            </div>
            <div>
                <p>What to Support</p>
                <button onClick={handleChocolateButton} disabled={flavor === "Chocolate"}>Chocolate</button>
                <button onClick={handleVanillaButton} disabled={flavor === "Vanilla"}>Vanilla</button>
                <button onClick={handleStrawberryButton} disabled={flavor === "Strawberry"}>Strawberry</button>
            </div>
            <div>
                <p>Color Theme</p>
                <button onClick={handleLightButton} disabled={mode === "-light"}>Light</button>
                <button onClick={handleDarkButton} disabled={mode === "-dark"}>Dark</button>
            </div>
        
        </div>
    )
}

export default AdDesigner;