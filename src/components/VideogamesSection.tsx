import '../styles/interestsSections.css'
import AnimatedImage from './AnimatedImage';
function VideogamesSection() 
{

    return (
        <div className="mainDialogContainer">
            <div className="secondaryDialogContainer">
                <div className="favouriteVideogamesContainer">
                    <span>
                        My favorite videogames
                    </span>
                    <div className="coversContainer">
                        <div className='InterestContainer'>
                            <AnimatedImage url={require("../assets/interestsImages/tlou.jpg")} />
                            <b>The Last of Us</b>
                        </div>
                        <div className='InterestContainer'>
                            <AnimatedImage url={require("../assets/interestsImages/godOfWar.jpg")} />
                            <b>God of War</b>
                        </div>
                        <div className='InterestContainer'>
                            <AnimatedImage url={require("../assets/interestsImages/ac2.jpg")} />
                            <b>Assassin's Creed 2</b>
                        </div>
                    </div>
                    <p style={{color:'white',marginTop:'30px'}}>
                    <b>Check my backlog here</b><br/>
                    <div style={{marginTop:'20px'}}>
                        <a href='https://www.backloggd.com/u/Darkclaus/' target='_blank' rel="noreferrer" >
                        <img src={require("../assets/genericIcons/backloggd.jpg")} style={{width:'5%',marginRight:'15px'}}/>
                        Darkclaus
                        
                        </a> 
                    </div>
                    </p>
                     
                </div>    
            </div>
        </div>
            
    );
}

export default VideogamesSection;