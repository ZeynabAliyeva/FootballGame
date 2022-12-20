import React, { useState } from 'react'

function Football() {
    const [ufuqi,setUfuqi] = useState(475);
    const [shaquli, setShaquli] = useState(200);
    const [leftNumber,setLeft] = useState(0);
    const [rightNumber,setRight] = useState(0);

    function right(){
      if(ufuqi>935){
          setRight((e)=>e+1)}
      if(ufuqi<955){
        setUfuqi(ufuqi+20)
         }  
         if(ufuqi==955){
          setUfuqi(ufuqi-465)
         }
    }
    function top(){
      if(shaquli>0){
        setShaquli(shaquli-20)
      }
  }
  function bottom(){
    if(shaquli<460){
      setShaquli(shaquli+20)
    }
  }
  function left(){
    if(ufuqi<35){
      setLeft((e)=>e+1)}
    if(ufuqi>15){
       setUfuqi(ufuqi-20)
         }
         if(ufuqi==15){
          setUfuqi(ufuqi+460)
         }
  }


  return (
    <>
    <div className='container'>
    <button className='ball'style={{left:ufuqi+"px" , top:shaquli+"px"}}></button>
      <div className='qap'>
      <div className='left'></div>
        <div className='right'></div>
      </div>
    </div>
    <span>Left{leftNumber}</span>
    <span>Right{rightNumber}</span>
    <div className='btn'>
        <button className='topBtn btn_n' onClick={top}>Yuxari</button>
        <button className='rightBtn btn_n' onClick={()=>{right()}}>Sag</button>
        <button  className='bottomBtn btn_n' onClick={bottom}>Asagi</button>
        <button className='leftBtn btn_n' onClick={left}>Sol</button>
    </div>
    </>
  )
};
export default Football;