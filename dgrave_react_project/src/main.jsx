import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile({letter, outputStr, setOutputStr, handleTiles}) {
  return (
    <button style={style.letter} onClick={(e)=>{
    //console.log(e.target.value);
    const nextValue = [...outputStr, e.target.value];
    const filteredResult = handleTiles(nextValue);
    setOutputStr(filteredResult);
    }} value={letter}>{ letter }</button>
  );
}

function Application() {
const [outputStr, setOutputStr] = useState([]);
console.log(outputStr);
/* const [data, setData] = useState([]); */
/*console.log(counter); */
/* useEffect(()=>{
  const nextData = handleTiles(outputStr);
  setData(nextData);
},outputStr) */

function handleTiles(data){
  let pointer = '';
  let counter = 0;
  let result = data;
  for(let j=0;j<= data.length-1;j++){
      pointer = data[j];
      const inspection = data.filter((data) => data===pointer);
      if (inspection.length<3) {
          continue;
      }
  for(let i=0;i<= data.length-1;i++){
      if(counter===3){
          result.splice(data.length-1,1);
          result.splice(data.length-1,1);//i-3
          result.splice(data.length-1,1,'_');
          counter = 0;
      }   else if(counter!==0 && pointer!==data[i]){
          counter=0;
      }else if(pointer ===data[i]){
          counter++;
      }
  }
  }
  return result;
} 
  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        <Tile letter='A' setOutputStr={setOutputStr} outputStr={outputStr} handleTiles={handleTiles}/>
        <Tile letter='B' setOutputStr={setOutputStr} outputStr={outputStr} handleTiles={handleTiles}/>
        <Tile letter='C' setOutputStr={setOutputStr} outputStr={outputStr} handleTiles={handleTiles}/>
      </aside>
      <div id="outputString">
      {outputStr.join('')}
      </div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);