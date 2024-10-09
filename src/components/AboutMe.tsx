import { Avatar, Button, Dialog} from "@mui/material";
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";
import '../styles/aboutMe.css'
import cvPDF from "../assets/Buono-Claudio-CV.pdf";

// Interests icons
import '../assets/interestsIcons/videogames.png'
import '../assets/interestsIcons/cinema.png'
import '../assets/interestsIcons/coding.png'
import React, { useState } from "react";
import VideogamesSection from "./VideogamesSection";


function AboutMe() {

    const [popOverCategory,setPopOverCategory] = useState("")

    const handleClick = (event: React.MouseEvent<HTMLDivElement>,id) => {

    
        if(id===0)
            setPopOverCategory("videogames")
        else if(id===1)
            setPopOverCategory("cinema")
        else if(id===2)
            setPopOverCategory("music")
        
  };

  

  const handleClose = () => {
    setPopOverCategory("")

  };


    const interests = ["videogames","cinema","music","coding"]

    return (
       
            
        <div className="aboutMeMainContainer">
            <div className="aboutMeLabel">ABOUT ME
                <hr className='underlineCustomOrange'></hr>
            </div>
            <div className="aboutMeSecondaryContainer">
                <div className="infoContainer">
                    <Fade up>
                    <div className="descriptionContainer">
                        
                    Hi, I'm Claudio Buono, a 23-year-old computer science graduate, having recently earned my bachelor's degree. I have a deep passion for programming in all its forms, from web development to video game creation.
                    <br></br> My journey in the world of computer science began during high school, driven by the dream of becoming a video game developer. While I continue to pursue that goal, my curiosity and love for technology have expanded to embrace various other fields within computer science, allowing me to grow as a versatile developer.
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
                                            <div className="interestTitle">{interest[0].toUpperCase() + interest.slice(1)}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                       
                        
                        <Dialog
                            open={(popOverCategory === "videogames" ? true : false)}
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