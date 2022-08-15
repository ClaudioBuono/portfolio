import { useEffect, useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense


var array : number[] = []
var state : number[] = []

const WIDTH = 600
const HEIGHT = 400

//let running
let nElements = 20

let i=0

//TODO draw continues to run without using p5.noLoop() -> to resolve?
//TODO more elements > 100
//TODO add colors

const SortingAlgorithms = (props) => {

	const [selected,setSelected] = useState(props.name)
  const [elementsNumber,setElements] = useState(props.nElements)

  useEffect(() => {
      // Update the document title using the browser API
      setSelected(props.name)
      setElements(props.nElements)
      
      resetSketch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.name,props.nElements]);

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
	
        //running = true
        p5.createCanvas(WIDTH,HEIGHT).parent(canvasParentRef);
        p5.frameRate(60)
        resetSketch();
        
	};

  
  /*function stopSketch(p5)
    {
        if(running)
        {
            p5.noLoop();
            running = false       
        }
        else
        {
            p5.loop();
            running = true
        }
        
    }*/

    function resetSketch()
    {
        i = 0
        
        nElements = elementsNumber
        
        //resetting arrays otherwise the function would run till the end of input value
        array = []
        state = []

        for(let i=0;i<nElements;i++)
        {
            let n = Math.floor(Math.random() * (HEIGHT) + 1)
            array[i] = n
            state[i] = 0  
          }
        
    }

    // swap function between 2 array's elements
    async function swap(array,i,j)
    {
        let app = array[i]
        array[i] = array[j]
        array[j] = app   
        await sleep(1000)
    }

    // Selection sort
    async function selectionSort(array)
    {

        for(let i = 0;i<array.length-1;i++)
        {
          for(var j = i+1;j<array.length;j++)
          {
            if(array[j]<array[i])
            {
              await swap(array,i,j)              
            }          
          }
        }   
        
    }

    // Bubble sort
    async function bubbleSort(array)
    {  
        for (let j = 0; j < array.length - i - 1; j++) 
        {
          if (array[j] > array[j + 1]) {
            await swap(array, j, j + 1); 
          }
        }
             
    }

    // Merge sort
    async function merge(array,low,mid,high) {
      
      let n1 = mid - low + 1;
      let n2 = high - mid;
  
      let l = new Array(n1);
      let r = new Array(n2);
  
      for (let i = 0; i < n1; i++) {
          l[i] = array[low + i];
      }
  
      for (let i = 0; i < n2; i++) {
          r[i] = array[mid + i + 1];
      }
  
      let i = 0;
      let j = 0;
      let k = low;
  
      while (i < n1 && j < n2) {
        
          if (l[i] <= r[j]) {
            array[k] = l[i];
              i++;
          } else {
            array[k] = r[j];
              j++;
          }
  
          k++;
      }
  
      while (i < n1) {
        array[k] = l[i];
          i++;
          k++;
      }
  
      while (j < n2) {
          array[k] = r[j];
          j++;
          k++;
  
      }
      
    }

    async function mergeSort(array, low, high) {
      
      if (low < high) {
          let mid = parseInt(((low + high) / 2).toString());
          await mergeSort(array, low, mid);
          await mergeSort(array, mid + 1, high);
          await merge(array, low, mid, high);
          await sleep(60)
          
      }
  }


	const draw = async (p5: p5Types) => {
        
        p5.background("#181b20")
    
        
        if(selected === "selectionSort")
          selectionSort(array)
        else if(selected === "bubbleSort")
          bubbleSort(array)
        else if(selected === "mergeSort")
          mergeSort(array,0,array.length-1)
     
        for (let x = 0; x < array.length; x++) 
        {
    
          p5.rect(x*(WIDTH/nElements),HEIGHT,WIDTH/nElements,-array[x])
              
        }
	};

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


	return <Sketch setup={setup} draw={draw} />;
};

export default SortingAlgorithms;