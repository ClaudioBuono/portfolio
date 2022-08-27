import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense


const GraphsAlgorithms = (props) => {


    const WIDTH = 400
    const HEIGHT = 400

    var vertices : any[] = []

	//See annotations in JS for more information
    const setup = (p5: p5Types, canvasParentRef: Element) => {

        let cnv = p5.createCanvas(WIDTH,HEIGHT).parent(canvasParentRef);
        p5.frameRate(60)
        
        cnv.mousePressed(() => {
            var v = p5.createVector(p5.mouseX,p5.mouseY)
            vertices.push(v)
          })

        for(let i = 0;i < 50;i++){
            var v = p5.createVector(Math.floor(Math.random() * (WIDTH-50) + 50),Math.floor(Math.random() * (HEIGHT-50) + 50))
            vertices.push(v)
         }
        
    };


	const draw = async (p5: p5Types) => {

        var reached : any[] = []
        // Nodi non esplorati
        var unreached : any[] = []

        // Aggiunge i tutti i nodi a quelli non esplorati
        for(let i = 0;i < vertices.length;i++){
        unreached.push(vertices[i])
        }

        // Esplora il primo nodo
        reached.push(unreached[0])
        unreached.splice(0,1)

        // Finché ci sono nodi esplorati
        while(unreached.length>0)
        {
            var minDistance = 10000
            var r,u

            for(let i = 0;i < reached.length;i++){
                for(let j = 0;j < unreached.length;j++){
                
                // Calcolo distanza tra nodi esplorati e non esplorati
                var node1 = reached[i]
                var node2 = unreached[j]
                var distance = p5.dist(node1.x,node1.y,node2.x,node2.y)
                
                if(distance<minDistance){
                    minDistance = distance
                    r = i
                    u = j
                }
                }
            }

            // Disegna l'arco
            p5.line(reached[r].x,reached[r].y,unreached[u].x,unreached[u].y)
        
            // Inserisce il nodo in quelli esplorati e lo toglie da quelli non esplorati
            reached.push(unreached[u])
            unreached.splice(u,1)
        }
        
        for(let i = 0;i < vertices.length;i++){
            p5.fill(255)
            p5.stroke(255)
            p5.ellipse(vertices[i].x,vertices[i].y,16,16)
          }
    }


	return <Sketch setup={setup} draw={draw} />;
};

export default GraphsAlgorithms;