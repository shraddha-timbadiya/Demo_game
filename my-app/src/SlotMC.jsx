
const SlotM = (props)=>{
    /* let x = '😄';
    let y = '😄';
    let z = '🎅';
   */
  /* 
   let x = props.x;
   let y = props.y;
   let z = props.z;
   */
   let{x,y,z} = props;/* destructuring */
     if(x===y && y===z){
      return(
        <>
          <div className='slot_inner'>
            <h1>{x}{y}{z}</h1>
            <h1>this is matching</h1>
          </div>
          <hr/>
        </>
      )
    }else{
      return(
        <>
          <div className='slot_inner'>
            <h1>{x}{y}{z}</h1>
            <h1>this is not matching</h1>
          </div>
          <hr/>
        </>
      )
    } 
  
  /* {(x===y && y===z)?<><div className='slot_inner'><h1>{x}{y}{z}</h1><h1>this is matching</h1></div><hr/></>:<><div className='slot_inner'><h1>{x}{y}{z}</h1><h1>this is not matching</h1></div><hr/></>}
 */}
export default SlotM