import { Avatar, Button, Dialog} from "@mui/material";
import Fade from 'react-reveal/Fade'
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";
import '../styles/aboutMe.css'


// Interests icons
import '../assets/interestsIcons/game.png'
import '../assets/interestsIcons/cinema.png'
import '../assets/interestsIcons/coding.png'
import React, { useState } from "react";
import VideogamesSection from "./VideogamesSection";


function AboutMe() {

    const [popOverCategory,setPopOverCategory] = useState("")

    const handleClick = (event: React.MouseEvent<HTMLDivElement>,id) => {

    
        if(id===0)
            setPopOverCategory("game")
        else if(id===1)
            setPopOverCategory("cinema")
        else if(id===2)
            setPopOverCategory("music")
        
  };

  

  const handleClose = () => {
    setPopOverCategory("")

  };


    const interests = ["game","cinema","music","coding"]

    const saveManual = () => {
        saveAs.saveAs(
          process.env.REACT_APP_CLIENT_URL + "../../public/cv.txt",
          "cv.txt"
        );
    };
    return (
       
            
        <div className="aboutMeMainContainer">
            <div className="aboutMeLabel">ABOUT ME
                <hr className='underlineCustomOrange'></hr>
            </div>
            <div className="aboutMeSecondaryContainer">
                <div className="infoContainer">
                    <Fade up>
                    <div className="descriptionContainer">
                        <p>Hi, I'm Claudio Buono, 21 years old computer science student, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus necessitatibus laborum sint, qui non veritatis magni perspiciatis praesentium, maiores eaque ipsa mollitia, ipsum vero nulla earum eius exercitationem itaque!</p>
                    </div>
                    </Fade> 
                    <Fade up> 
                    <div className="infoContainerButtons">                 
                        <Button className="whiteOutlinedButton" onClick={()=>{saveManual()}} variant="outlined">Download CV</Button>     
                        <Link to="/ContactMe"><Button className="whiteOutlinedButton" variant="outlined"> CONTACT ME</Button></Link>
                    </div>
                    </Fade>
                    <div className="interestsContainer">
                        <div className="interestsLabel">
                            My interests
                        </div>
                        <div className="interestsButtonsContainer">
                        
                            {  
                            
                                interests.map((interest,i)=>{                     
                                    return(
                                        <div className="interestBlock hvr-grow" onClick={event=>handleClick(event,i)} key={i}>
                                            <div className="inner">
                                            <img alt="i" src={require("../assets/interestsIcons/"+`${interest}`+".png")}></img>
                                            <div className="interestTitle">{interest}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                       
                        
                        <Dialog
                            open={(popOverCategory === "game" ? true : false)}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                            
                        >
                                <VideogamesSection/>                    
                        </Dialog>

                        </div>    
                    </div>                           
                </div>
                <div className="photoContainer">
                <Fade right>
                    <Avatar
                        alt="Me"
                        src={require('../assets/me.jpeg')}
                        className="avatar"
                    />
                </Fade>
                </div>
            </div>        
        </div>
    
      
       
    );
}

export default AboutMe;