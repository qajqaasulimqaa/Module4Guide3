import { useState } from "react";

//Making function called ToDo
const ToDo= () =>{
// Two varaibles with useState, one called text
const[text, setText] = useState(""); 
//Second variable called todos, that is also empty array of items
const[todos, setTodos] = useState<string[]>([]); 

// function that activates button
const handleClick = () =>{
    //Trim removes all the extra white space around text
    if(text.trim()=== "") return; 
    //Makig new array with new text in it at the end ...
    setTodos([...todos, text]); 
    //That cleans the input
    setText(""); 

}; 
    return(
        <div>
    <input
     value={text} 
     //When imput changes it is being updated in setText. E stands for event
     onChange={(e) => setText(e.target.value)} 
     placeholder="Type a task"/>
        <button onClick={handleClick}>Add to the list</button>
        <p>Your list: </p>
        <li>{todos}</li>
        </div>
    )
}
export default ToDo; 