import { Avatar, Button, Dialog} from "@mui/material";
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";
import '../styles/aboutMe.css'
import cvPDF from "../assets/Buono-Claudio-CV.pdf";

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

    return (
       
            
        <div className="aboutMeMainContainer">
            <div className="aboutMeLabel">ABOUT ME
                <hr className='underlineCustomOrange'></hr>
            </div>
            <div className="aboutMeSecondaryContainer">
                <div className="infoContainer">
                    <Fade up>
                    <div className="descriptionContainer">
                        <p>Hi, I'm Claudio Buono, 21 years old computer science student, actually studying at University in Salerno, I like almost every aspect of programming, 
                        from Website Developing to Artificial Intelligence.<br></br>I started studying computer science in high school with the dream to become a videogame developer, and
                        even if I'm still chasing that dream, I got interested in other branches of computer science.
                        </p>
                    </div>
                    </Fade> 
                    <Fade up> 
                    <div className="infoContainerButtons">     
                    <a href={cvPDF} target="_blank" rel="noreferrer">         
                        <Button className="whiteOutlinedButton" variant="outlined">View CV</Button> 
                        </a>      
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
                        src={require('../assets/me.png')}
                        className="avatar"
                    />
                </Fade>
                </div>
            </div>        
        </div>
    
      
       
    );
}

export default AboutMe;