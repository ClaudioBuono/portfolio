import Fade from 'react-reveal/Fade';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {BsGithub, BsLinkedin, BsPlay, BsPlayBtn, BsPlayBtnFill, BsPlayCircle} from 'react-icons/bs'
import '../styles/projects.css';
import '../styles/hover.css';


function Projects() {
    return (
        <Fade right>
            <div>
                <div id="projectsContainer">
                     {/* OTHER PROJECTS */}

                     <div className="projectsBox">
                        <div className="boxTitle">
                            <img style={{marginBottom:'12px'}} src={require('../assets/genericIcons/blueprint.png')}/>                          
                            <span>MY PROJECTS</span>
                        </div>
                        <div className="cardBoxContainer">

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/wordwarp.png')}
                                        alt="snake"
                                        style={{objectPosition: "50% 80%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        WordWarpVR
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Virtual Reality videogame for english improvement, developed for meta quest 2 using XR development toolkit.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Coming soon</Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/mini_steam_profile.png')}
                                        alt="snake"
                                        style={{objectPosition: "50% 80%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Mini Steam Profile
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        React component for showing a minimal version of a steam profile, including games played, hours played and other informations.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" target='_blank' href="https://github.com/ClaudioBuono/mini-steam-profile">
                                        <BsGithub size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>Explore
                                        </Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            {/*
                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block"}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/snake.gif')}
                                        alt="snake"
                                        style={{objectPosition: "50% 80%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        MultiSnake
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Classic snake game recreated in 3D with multiplayer feature.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Coming soon</Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>
                            */}

                        
                        </div>
                    </div>
                    

                    {/* UNIVERSITY PROJECTS */}

                    <div className="projectsBox">
                        <div className="boxTitle">
                            <img alt="unity" src={require('../assets/genericIcons/graduation-hat.png')}/>  
                            <span>UNIVERSITY PROJECTS</span>
                        </div>
                        <div className="cardBoxContainer">
                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345}}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/mapGif.gif')}
                                        alt="unisaEAT"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        EvoPath
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Map generation tool for tower defense videogames using AI Genetic Algorithm developed for AI university course.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                         
                                        <Button size="small" target='_blank' href="https://github.com/Gianpyy/evopath">
                                        <BsGithub size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>Explore
                                        </Button>
                                        
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/unisaEAT.gif')}
                                        alt="unisaEAT"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        UnisaEAT
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Software Enginering project, developed with a squad of 7 students and 2 project managers, provided of full documentation and a repository.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" target='_blank' href="https://github.com/UnisaEAT">
                                        <BsGithub size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>Explore
                                        </Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        width="10"
                                        image={require('../assets/projectsGIFs/ecommerce_gif.gif')}
                                        alt="peppe"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        GameNyx
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Simulation of a videogames e-commerce website developed for an university web development course.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" target='_blank' href="https://github.com/CappelloNicola/TSW2021_francese-GameNyx">
                                        <BsGithub size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>Explore
                                        </Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* P5.JS PROJECTS */}
                    <div className="projectsBox">
                        <div className="boxTitle">
                            <img alt="unity" style={{marginBottom:'3px'}} src={require('../assets/languagesIcons/p5.png')}/>  
                            <span>P5.JS PROJECTS</span>
                        </div>
                        <div className="cardBoxContainer">
                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/sortAlg.gif')}
                                        alt="sortingAlg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Sorting algorithms visualized
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Visualized sorting algorithms using p5.js, including selection sort, bubble sort and merge sort algorithms.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to="/Projects/SortingAlgorithms">
                                            <Button size="small" style={{ color: '#FFF' }}>
                                                <BsPlay size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>
                                                Explore
                                            </Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/graphAlg.gif')}
                                        alt="graphAlg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Graphs algorithms visualized
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Visualized graphs algorithms using p5.js, including shortest path algorithms for connecting multiple dots using the shortest path.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Link to="/Projects/GraphsAlgorithms">
                                            <Button size="small" style={{ color: '#FFF' }}>
                                                <BsPlay size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>
                                                Explore
                                            </Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block",marginRight:30}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={require('../assets/projectsGIFs/terrainGenerator.gif')}
                                        alt="graphAlg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Terrain generation
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Random generated terrains using Perlin noise to generate biomes and simulate maps with lakes and plains. 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Link to="/Projects/TerrainGeneration">
                                            <Button size="small" style={{ color: '#FFF' }}>
                                                <BsPlay size={20} style={{marginLeft:'5px',marginRight:'8px',marginBottom:'3px',color:'white'}}/>
                                                Explore
                                            </Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </Fade>
    );
}

export default Projects;