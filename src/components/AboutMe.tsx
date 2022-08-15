import { Avatar, Button } from "@mui/material";
import Fade from 'react-reveal/Fade'
import { saveAs } from 'file-saver';
import '../styles/aboutMe.css'

// Interests icons
import '../assets/interestsIcons/game.png'
import '../assets/interestsIcons/cinema.png'
import '../assets/interestsIcons/coding.png'
import { Link } from "react-router-dom";

function AboutMe() {

    const interests = ["game","cinema","music","coding"]

    const saveManual = () => {
        saveAs.saveAs(
          process.env.REACT_APP_CLIENT_URL + "../../public/cv.txt",
          "cv.txt"
        );
    };
    return (
       
            
        <div className="aboutMeMainContainer">
            <p className="aboutMeLabel">ABOUT ME
                <hr className='underlineCustomOrange'></hr>
            </p>
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
                        <Button className="whiteOutlinedButton" variant="outlined"><Link to="/ContactMe"> CONTACT ME</Link></Button>       
                    </div>
                    </Fade>
                    <div className="interestsContainer">
                        <div className="interestsLabel">
                            My interests
                        </div>
                        <div className="interestsButtonsContainer">
                        <Fade up>
                            {  
                                interests.map((interest,i)=>{                     
                                    return(
                                        <div className="interestBlock">
                                            <div className="inner">
                                            <img alt="i" src={require("../assets/interestsIcons/"+`${interest}`+".png")}></img>
                                            <div className="interestTitle">{interest}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Fade>
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