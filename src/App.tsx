import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import SortingAlgorithmsVisualized from "./pages/SortingAlgorithmsVisualized";
import GraphsAlgorithmsVisualized from "./pages/GraphsAlgorithmsVisualized";

import ScrollToTop from "./components/ScrollToTop";
import { ToastProvider } from 'react-toast-notifications';
import "../src/styles/app.css"
import "../src/styles/mobileResponsive.css"
import TerrainGenerationVisualized from "./pages/TerrainGenerationVisualized";




function App() {

    return(
        
            <div>
                <ToastProvider placement="bottom-center">
                  <ScrollToTop />
                    <Navbar/>
                        <Routes>
                            <Route path="/" element={<Homepage/>}/>
                            <Route path="/ContactMe" element={<ContactMe/>}/>
                            <Route path="/Projects" element={<Projects/>}/>
                            
                            <Route path="/Projects/SortingAlgorithms" element={<SortingAlgorithmsVisualized/>}/>
                            <Route path="/Projects/GraphsAlgorithms" element={<GraphsAlgorithmsVisualized/>}/>
                            <Route path="/Projects/TerrainGeneration" element={<TerrainGenerationVisualized/>}/>
                        </Routes>
                    <Footer/>
                </ToastProvider>
            </div>
        );
}

export default App;