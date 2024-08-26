import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names =["earn" , "grow" , "give"];
        const int=Math.floor(Math.random()*3);
        return names[int]
      }
const handleClick = (e) =>{
    console.log(e.target.innerText)
}
const handleClick2 = (name) =>{
    console.log(`hey i am vinuja ${name}`)
}
    

  return (
    <main>
    <p onDoubleClick={()=>handleClick2('vinu')}> Lets {handleNameChange()} Money</p>
    <button onClick={(e)=>handleClick(e)}>click</button>
    </main>
  )
}

export default Content