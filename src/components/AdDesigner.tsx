import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./AdDesigner.css";

interface Props {
    flavor: String;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: Props) {
    return (
        <div>
        <div  className={"ad" + (darkTheme === true ? '-dark' : '')}>
            <p>Vote For</p>
            <h3 style={{fontSize: fontSize}}>{flavor}</h3>
        </div>
    </div>
    )
    
}

function AdDesigner() {
    const [flavor, setFlavor] = useState("Strawberry");
    const [mode, setMode] = useState(false);
    const [fontSize, setFontSize] = useState(25);

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
        setMode(false);
    }
    
    const handleDarkButton = () => {
        setMode(true);
    }

    const handleDownButton = () => {
        setFontSize(prevSize => prevSize -= 1);
    }

    const handleUpButton = () => {
        setFontSize(prevSize => prevSize += 1);
    }
    return (<div style={{marginLeft: '8px'}}>
            <h2 className="caveat-font">Ad Designer</h2>
            {/* <div className= {"ad" + mode} style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', border: '2px solid black', width: "150px", height: '120px'}}>
                <p>Vote For</p><h3 style={{fontSize: fontSize}}>{flavor}</h3>
            </div> */}
            <Ad flavor={flavor} fontSize={fontSize} darkTheme={mode}/>
            <div>
                <p>What to Support</p>
                <button onClick={handleChocolateButton} disabled={flavor === "Chocolate"}>Chocolate</button>
                <button onClick={handleVanillaButton} disabled={flavor === "Vanilla"}>Vanilla</button>
                <button onClick={handleStrawberryButton} disabled={flavor === "Strawberry"}>Strawberry</button>
            </div>
            <div>
                <p>Color Theme</p>
                <button onClick={handleLightButton} disabled={mode === false}>Light</button>
                <button onClick={handleDarkButton} disabled={mode === true}>Dark</button>
            </div>
            <div>
                <p>Font Size</p>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                <button onClick={handleDownButton}>Down</button>
                <p>{fontSize}</p>
                <button onClick={handleUpButton}>Up</button>
                </div>
            </div>
        
        </div>
    )
}

export {AdDesigner, Ad};