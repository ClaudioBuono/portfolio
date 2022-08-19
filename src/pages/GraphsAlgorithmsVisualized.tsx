import "../styles/sortingAlgorithms.css";
import "react-awesome-button/dist/styles.css";
import GraphsAlgorithms from "../components/GraphsAlgorithms";

function GraphsAlgorithmsVisualized() {

   

    return (
        <div className="projectContainer">
            <div className="infoContainer">
                <div className="title">
                    Graphs Algorithms Visualized
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

            </div>
            <div className="algorithmBlockContainer">            
                <div className="algorithmContainer">                         
                    <GraphsAlgorithms/>
                </div>
            
            </div>
        </div>
        
        
    );
    
}

export default GraphsAlgorithmsVisualized;