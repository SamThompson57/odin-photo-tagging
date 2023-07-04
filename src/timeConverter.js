// take the score 

function timeConverter(time){

    let resolvedTime = time 

    if (typeof time === 'object' && typeof time.then === 'function'){
        time.then(value => {
        
        console.log(value)

        const minutes = Math.floor((value % 360000) / 6000);
    
        const seconds = Math.floor((value % 6000) / 100);
    
        const milliseconds = value % 100;
        
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`)

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`
        });
    }

    const minutes = Math.floor((resolvedTime % 360000) / 6000);
    
    const seconds = Math.floor((resolvedTime % 6000) / 100);
    
    const milliseconds = resolvedTime % 100;
    
    return  `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`
}

export default timeConverter