import {motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import Fade from 'react-reveal/Fade'

import '../styles/hover.css';
import "react-awesome-button/dist/styles.css";
import '../styles/homepage.css'






function Homepage() 
{
  
  const name = ["C","l","a","u","d","i","o"]
  const surname = ["B","u","o","n","o"]
  const { scrollYProgress } = useScroll();
  const opacity= useTransform (scrollYProgress, [0,0.5],[0.6,0]);
    

    return (
      
      <div>
      <Fade left>
        <div id="homepageContainer">
          <div id="nextPageContainer">
          <motion.div
            whileHover={{ x: 15 }}
          >
            <div>
              <Link to='/Projects' style={{color: '#fff'}}>
                <p>Projects
                  <img src={require("../assets/nextPage.png")} alt="nextPage" width={35} color={"white"}/>
                </p>
              </Link>
            </div>
            </motion.div>
          </div>
              <div id="nameContainer">
              
              {
                    name.map((letter,i) =>{                  
                      return(<span id="giantName" key={i} className="hvr-wobble-vertical">{letter}</span>)
                    })  
                       
              }
              &nbsp;&nbsp;
              {     surname.map((letter,e) =>{                  
                      return(<span id="giantName" key={e} className="hvr-wobble-vertical">{letter}</span>)
                    }) 
              }

            <div id="nameDesc">
              Creative <span className="hvr-skew-forward">full stack developer</span> student
            </div>
            <hr/>
          </div>
          <div id="descriptionContainer">
            <p>Welcome to my portfolio!</p>
            <p>I'm Claudio Buono, full stack developer and computer science student at  
              <a href='https://www.unisa.it/' target='_blank' rel="noreferrer">
                <span> UNISA</span>
              </a>
              .
            </p>
            <p>Here you can find my projects, languages that I've learned, and more.</p>
            <p id="funnyQuote">“Software and cathedrals are much the same — first we build them, then we pray.”</p>
          </div>
         
        <motion.div
        style={{opacity}}
          >
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
         </motion.div>
        </div>
        </Fade>

        <AboutMe/>
                  
        <div className='languagesMainContainer'>
          <div className='languagesSecondaryContainer'>
            <p className="languagesLabelTitle">MY SKILLS
              <hr className='underlineCustomOrange'></hr>
            </p>  
            
              <p className="languagesLabel">Frontend</p>

              <Fade up>
                <div className="languageContainer">             
                  <i className="devicon-html5-plain hvr-grow">
                    <h6>HTML 5</h6>
                  </i>  
                  <i className="devicon-css3-plain hvr-grow">
                    <h6>CSS</h6>
                  </i>
                  <i className="devicon-javascript-plain hvr-grow">
                    <h6>JAVASCRIPT</h6>
                  </i>               
                  <i className="devicon-typescript-plain hvr-grow">
                    <h6>TYPESCRIPT</h6> 
                  </i>  
                  <i className="devicon-react-original hvr-grow">
                    <h6>REACT</h6>
                  </i>
                  <i className="devicon-jquery-plain hvr-grow">
                    <h6>JQUERY</h6>
                  </i>
                </div>
              </Fade>
              
              <Fade up>
              <p className="languagesLabel">Backend</p>
                <div className="languageContainer ">             
                  <i className="devicon-c-plain-wordmark hvr-grow">
                    <h6>C</h6>
                  </i>
                  <i className="devicon-python-plain hvr-grow">
                    <h6>PYTHON</h6>
                  </i>
                  <i className="devicon-java-plain hvr-grow">
                    <h6>JAVA</h6></i>
                  <i className="devicon-android-plain hvr-grow">
                    <h6>ANDROID</h6>
                  </i>    
                </div>
              </Fade>

              </div>
          </div>
        </div>
      
       
    );
}

export default Homepage;

