import "../styles/sortingAlgorithms.css";
import "react-awesome-button/dist/styles.css";
import "../styles/terrainGeneration.css"

import * as terrainGen from "../components/TerrainGeneration";
import * as terrainGenColored from "../components/TerrainGenerationColored";

import { Button } from "@mui/material";
import { useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function TerrainGenerationVisualized() {

    const [mapSize,setMapSize] = useState(50)
    const [mapSeed,setMapSeed] = useState(100)

    const changeValue = (event) => {
        setMapSize(event.target.value)
    };

    const changeSeed = () => {
        setMapSeed(Math.random()*99)
    }

  

    return (
        <div className="projectContainer">
            
            <div className="infoContainer">
                <div className="title">
                    Terrain Generation
                </div>
                <div className="description">
                    <h6>Project description</h6>
                    <p>
                    Random generated maps using Perlin noise, every color represents a different biome which is selected based on the height calculated by the noise. 

                    </p>
                </div>
                <div className="languages">
                    <h6>Languages</h6>
                        <img alt="p5" src={require("../assets/languagesIcons/p5.png")}/> 
                        <img alt="react" src={require("../assets/languagesIcons/react.png")}/> 
                        
                </div>

            </div>
            <div className="algorithmTerrainBlockContainer">   
                    
                <div className="algorithmTerrainContainer">  
                    <div id="terrain">                                   
                        <ReactP5Wrapper class="terrain1" sketch={terrainGen.sketch} mapSeed={mapSeed} mapSize={1/mapSize} />
                    </div> 
                </div>
                <div className="algorithmTerrainContainer">
                    <div id="terrainColored">                   
                        <ReactP5Wrapper sketch={terrainGenColored.sketch} mapSeed={mapSeed} mapSize={1/mapSize} />
                    </div>    
                </div>
                <div className="algorithmControllerContainer">
                <Button className="generateMapButton" onClick={changeSeed}>Generate new map</Button> 
                    <div className="mapSizeController">
                        <p>Map size</p>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue={50}
                            sx={{justifyContent:"center"}}
                        >
                            <FormControlLabel onChange={changeValue} value={150} control={<Radio />} label="small" />
                            <FormControlLabel onChange={changeValue} value={50} control={<Radio />} label="medium" />
                            <FormControlLabel onChange={changeValue} value={20} control={<Radio />} label="large" />
                        </RadioGroup>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    );
    
}

export default TerrainGenerationVisualized;