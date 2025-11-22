import {useState} from "react"; 

const Story = () =>{

    const [StoryStarts, setStory] = useState("Press the button to start!")
    const [StoryNext, setNext]=  useState("Are you ready?"); 
    
    const handleClick = () =>{
        setStory(prev => prev + " " + StoryNext);
    setNext("Yey")
    }
    return(
        <div>
            <button onClick={handleClick}>Press me!</button>
            <p>{StoryStarts} {StoryNext}</p>
        </div>
    )
}
export default Story; 