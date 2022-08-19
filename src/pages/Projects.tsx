import '../styles/projects.css';
import '../styles/hover.css';

import Fade from 'react-reveal/Fade';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



function Projects() {
    return (
        <Fade right>
            <div>
                <div id="projectsContainer">
                    {/* P5.JS PROJECTS */}
                    <div className="projectsBox">
                        <div className="boxTitle">
                            <span>P5.JS PROJECTS</span>
                        </div>
                        <div className="cardBoxContainer">
                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block"}}
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
                                        Visualized sorting algorithms using p5.js, including selection sort, bubble sort, merge sort and more...
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to="/Projects/SortingAlgorithms">
                                            <Button size="small">Show More</Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block"}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image="https://blog.dataiku.com/hs-fs/hubfs/animation.gif?width=396&name=animation.gif"
                                        alt="graphAlg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Graphs algorithms visualized
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Visualized graphs algorithms using p5.js, including shortest path algorithms, trees and more...
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to="/Projects/GraphsAlgorithms">
                                            <Button size="small">Show More</Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block"}}
                            >
                                <div className="cardBox">
                                    <Card className="hover-shadow hover-zoom" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image="https://i.gifer.com/FooP.gif"
                                        alt="graphAlg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Terrain generation
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Visualized graphs algorithms using p5.js, including shortest path algorithms, trees and more...
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to="/Projects/TerrainGeneration">
                                            <Button size="small">Show More</Button>
                                        </Link>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* UNIVERSITY PROJECTS */}

                    <div className="projectsBox">
                        <div className="boxTitle">
                          
                            <span>UNIVERSITY PROJECTS</span>
                        </div>
                        <div className="cardBoxContainer">
                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block"}}
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
                                        Software Enginering project, realized with a squad of 7 students and 2 project managers, a website for the my universtity canteen.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Show More</Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{scale:1.2}}
                                style={{display:"inline-block"}}
                            >
                                <div className="cardBox">
                                    <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        width="10"
                                        image="https://c.tenor.com/ZztVmkKG2TIAAAAM/pepe-sad-pepe-crying.gif"
                                        alt="peppe"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        GameNyx
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Videogames E-commerce developed for the web developement university course...
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Show More</Button>
                                    </CardActions>
                                    </Card>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* UNITY PROJECTS */}

                    <div className="projectsBox">
                        <div className="boxTitle">
                            <img alt="unity" src={require('../assets/languagesIcons/unity.png')}/>                          
                            <span>UNITY PROJECTS</span>
                        </div>
                        <div className="cardBoxContainer">
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
                                        Classic snake game recreated in 3D with multiplayer.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Show More</Button>
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