// take the score 

function timeConverter(time){
    const minutes = Math.floor((time % 360000) / 6000);
    
    const seconds = Math.floor((time % 6000) / 100);
    
    const milliseconds = time % 100;
    
   
    
    

    return  `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`
}

export default timeConverter