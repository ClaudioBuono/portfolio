import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/steamProfile.css"

const cheerio = require("cheerio")

function SteamProfile() 
{
    const [recentlyPlayedGames,setRecentlyPlayedGames] = useState([])
    const [userInfos,setUserInfos] = useState([])
    const [gameCount,setGameCount] = useState("")
    const [profileLevel,setProfileLevel] = useState("")
    const [profileBackgroundURL,setProfileBackgroundURL] = useState("")
    
    const [flip,setFlip] = useState(false)
    
    // apiKey and SteamID hidden in .env file
    const apiKey = process.env.REACT_APP_API_KEY
    const steamID = process.env.REACT_APP_STEAM_ID

    const URL_GAMES = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key="+apiKey+"&steamid="+steamID+"&format=json"
    const URL_USER = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="+apiKey+"&steamids="+steamID+""
    const URL_COUNT_GAMES = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key="+apiKey+"&steamid="+steamID+""
    const URL_LEVEL = "https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key="+apiKey+"&steamid="+steamID+""

    
    useEffect(() => {
        axios.get(URL_GAMES).then((response) => {   
            setRecentlyPlayedGames(response["data"]["response"]["games"])
        });
        
        axios.get(URL_USER).then((response) => {   
            setUserInfos(response["data"]["response"]["players"][0])
        });

        axios.get(URL_COUNT_GAMES).then((response) => {   
            setGameCount(response["data"]["response"]["game_count"])
        });

        axios.get(URL_LEVEL).then((response) => {   
            setProfileLevel(response["data"]["response"]["player_level"])
        });
        
          
      },[URL_GAMES,URL_USER,URL_COUNT_GAMES,URL_LEVEL]);

    useEffect(() => {

        // Web scraping using cheerio to retrieve user's profile background image
        
        axios.get(userInfos["profileurl"],{
            headers: {
                'Accept': 'application/json',
            }}).then((response) => { 

            const $ = cheerio.load(response.data)
            const backgroundImage = $(".no_header.profile_page.has_profile_background").attr('style')
           
            if(backgroundImage=="")
            {
                const backgroundImageAnimated = $("video").attr("poster")
                setProfileBackgroundURL(backgroundImageAnimated)
            }
            else
            {
                const backgroundURL = backgroundImage.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
                setProfileBackgroundURL(backgroundURL)
            }
        })
          
      },[userInfos]);
     
    
      
    return (
        <div className="sp-mainContainer" style={{ backgroundImage: `url(${profileBackgroundURL})` }}>
            <div className="sp-imageContainer">
                <img alt="avatar" src={userInfos["avatarfull"]}></img>
            </div>
            <div className="sp-secondaryContainer">
                <div className="sp-infoContainer">
                    <div className="sp-nameAndLevelContainer">
                        <h4><a rel="noreferrer" href={`https://steamcommunity.com/profiles/${steamID}/`} target="_blank">{userInfos["personaname"]}</a></h4>
                        <div className="sp-levelContainer">
                            <span className="label">Level</span>
                            <div className="sp-levelContainerInner">
                                <span>{profileLevel}</span>
                            </div>
                        </div>
                    </div>
                    <p><span>Games </span>{gameCount}</p>
                </div>
                <div className="sp-recentlyPlayedContainer">
                    <p>Recently played</p>
                    <div className="sp-recentlyPlayedGames">
                    {
                        recentlyPlayedGames.slice(0,3).map((game,i)=>(
                            
                            <div key={i}>
                                <div className={`card ${flip ? "flip" : ""}`}>
                                    <div className="front" onClick={()=>setFlip(!flip)}>
                                        <img alt="i" src={`https://steamcdn-a.akamaihd.net/steam/apps/${game["appid"]}/header.jpg`}/>
                                    </div>
                                    <div className="back" onClick={()=>setFlip(!flip)}>
                                        <span className="hoursPlayed">{Math.round(game["playtime_forever"]/60*10)/10} hours</span>
                                    </div>
                                </div>
                                <p>{game["name"]}</p>
                            </div>                        
                            
                        ))
                    }
                    </div>
                </div> 
            </div>
        </div>
        
    );
}

export default SteamProfile;