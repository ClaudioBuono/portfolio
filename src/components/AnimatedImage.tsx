// 3D animated image on mouse hover using motion frame
// PROPS : url = image link or require local image
//         width = image width (optional -> set to auto)

import { motion, useMotionValue, useTransform } from "framer-motion";

function AnimatedImage(props) 
{
    var x = useMotionValue(50)
    var y = useMotionValue(50)

    var width = props.width ? props.width : "auto"

    // Transforms the image depending on x,y coordinates of the mouse
    const rotateX = useTransform(y, [0, 100], [30,-30])
    const rotateY = useTransform(x, [0, 100], [-30, 30])

    

    // Gets mouse x,y position on the image
    function handleMouse(event) 
    {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left );
        y.set(event.clientY - rect.top);
    }

    // Resets the image original position when the mouse leaves
    function resetMouse()
    {
        x.set(50);
        y.set(50);
    }

        
    return(
        <motion.img
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                width: width+"%",
                height: "auto",
                boxShadow: "rgba(0, 0, 0, 0.90) 0px 3px 8px",
                borderRadius : "5px",

                
            }}
            src={props.url}
            onMouseMove={handleMouse}
            onMouseLeave={resetMouse}
            
        >
        </motion.img>
    )
}

export default AnimatedImage;