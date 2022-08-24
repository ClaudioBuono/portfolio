import SortingAlgorithms from "../components/algorithmsComponents/SortingAlgorithms"
import { useState } from "react";
import { Button, ButtonGroup, Slider } from "@mui/material";

import "../styles/sortingAlgorithms.css";

function SortingAlgorithmsVisualized() {

    const [selectedAlgorithm,setSelectedAlgorithm] = useState("selectionSort")
    const [elementsNumber,setElementsNumber] = useState(50)

    const changeValue = (event) => {
        setElementsNumber(event.target.value)
    };
      
    // TODO RESET BUTTON
    // TODO TIME COMPLEXITY AND DESCRIPTION + PSEUDOCODE
    // TODO ADD MORE ALGORITHMS

    return (
        <div className="projectContainer">
            <div className="infoContainer">
                <div className="title">
                    Sorting Algorithms Visualized
                </div>
                <div className="description">
                    <h6>Project description</h6>
                    <p>
                    This project aims to show how sorting algorithms work, visualizing every step the algorithm makes.
                        <br></br>
                    It's possible to pick different sorting algorithms and the number of elements to sort. 
                    </p>
                </div>
                <div className="languages">
                    <h6>Languages</h6>
                        <img alt="p5" src={require("../assets/languagesIcons/p5.png")}/> 
                        <img alt="react" src={require("../assets/languagesIcons/react.png")}/> 
                </div>
                <div className="controllerContainer">
                    <ButtonGroup size="large" aria-label="large button group">
                        <Button className="controllerButtons" onClick={()=>setSelectedAlgorithm("selectionSort")}>Selection sort</Button>
                        <Button className="controllerButtons" onClick={()=>setSelectedAlgorithm("bubbleSort")}>Bubble sort</Button>
                        <Button className="controllerButtons" onClick={()=>setSelectedAlgorithm("mergeSort")}>Merge sort</Button>
                    </ButtonGroup>
                    
                </div>    
            </div>
            <div className="algorithmBlockContainer">            
                <div className="algorithmContainer">                         
                    <SortingAlgorithms className="test" name={selectedAlgorithm} nElements={elementsNumber}/>
                    <p>Elements number</p>
                    <Slider className="slider" onChange={changeValue} defaultValue={50}  min={10} max={300} aria-label="Default" valueLabelDisplay="auto" />
                </div>
            
            </div>
        </div>
        
        
    );
    
}

export default SortingAlgorithmsVisualized;