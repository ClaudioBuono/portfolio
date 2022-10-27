import '../styles/interestsSections.css'
import AnimatedImage from '../components/AnimatedImage';
import SteamProfile from './SteamProfile';
function VideogamesSection() 
{

    return (
        <div className="mainDialogContainer">
            <div className="secondaryDialogContainer">
                <div className="favouriteVideogamesContainer">
                    <span>
                        My top 3 videogames
                    </span>
                    <div className="coversContainer">
                        <AnimatedImage url={require("../assets/interestsImages/tlou.jpg")} width="30"/>
                        <AnimatedImage url={require("../assets/interestsImages/godOfWar.jpg")} width="30"/>
                        <AnimatedImage url={require("../assets/interestsImages/ac2.jpg")} width="30"/>
                    </div>        
                </div>    
            </div>
        </div>
            
    );
}

export default VideogamesSection;