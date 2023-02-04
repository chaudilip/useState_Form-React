import './App.css';
import { useState } from 'react';

function App() {
  const [headingText , setHeadingtext] = useState();
  const [isMouseOver,setMouseOver] = useState(false);
  const [name,setName] = useState("");
  function handleClick(event){
    setHeadingtext(name);
    event.preventDefault();
  }
  function colorChange(){
    setMouseOver(true);
  }
  function colorChangeBack(){
    setMouseOver(false);
  }
//  every onchange clcked the event is passes thorough object 
  function handleOnChange(event){
    setName(event.target.value);
  }
  return (
    <div className="container">
       <h1>Hello {headingText}</h1> {/*change the hello to {headingText} */}
       <form onSubmit={handleClick}>
      <input
       onChange={handleOnChange}
        type="text"
         placeholder="What's your name?"
         value={name} />
      <button type="submit"
       style={{backgroundColor:isMouseOver ? "black" : "white"}}
        onMouseOver={colorChange}
        onMouseLeave={colorChangeBack}>Submit</button>
        </form>
    </div>
  );
}

export default App;
