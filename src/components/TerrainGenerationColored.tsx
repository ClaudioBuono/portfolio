
export function sketch(p5)
{


    const WIDTH = 300
    const HEIGHT = 300

    let map 

    let ocean = "#008dc4";
    let shore = "#00a9cc";
    let sand = "#eecda3";
    let grass = "#7ec850";
    let stone = "#676767";
    let snow = "#fffafa";
    let noiseScale = 1/150

    p5.updateWithProps = props => {
        if (props.mapSize) {
          noiseScale = props.mapSize;
          p5.setup()
          
        }

        if (props.mapSeed) {
            p5.noiseSeed(props.mapSeed);
            p5.setup()
          }
      };

	//See annotations in JS for more information
    p5.setup = () => {

        p5.createCanvas(WIDTH,HEIGHT).parent("terrainColored");
        p5.pixelDensity(1);
        
        p5.noStroke()
        p5.background(0)
     
        p5.noiseDetail(5, 0.5);
  
    
        makeMap(p5);
        
        drawMap(p5);
  
    };



    
    function makeMap(p5)
    {
        map = [];
        for(let i = 0; i < WIDTH; i++)
        {
            map[i] = [];
            for(let j = 0; j < HEIGHT; j++)
            {
                map[i][j] = pickColor(i,j,p5);
            }
        }
    }

    function pickColor(i, j,p5)
    {
        let h = p5.noise((i)*noiseScale,(j)*noiseScale);
        let c = "#facade";
        
        if(h < 0.2)
        {
            c = ocean;
        } 
        else if(h < 0.3)
        {
           
            c = shore;
           
        }
        else if(h < 0.4)
        {
           
            c = sand;
            
        }
        else if(h < 0.5)
        {
           
            c = grass;
            
        }
        else if(h < 0.6)
        {
           
            c = stone;
            
        }
        else
        {
             
            c = snow
        }
      
        
        return p5.color(c);
        }

        function drawMap(p5)
        {
        for(let i = 0; i < WIDTH; i++)
        {
            for(let j = 0; j < HEIGHT; j++)
            {
                p5.set(i, j, map[i][j])
            }
        }
        p5.updatePixels();
    }

	

    
};

