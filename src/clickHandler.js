

function shoot(event, target, newTarget) {
    console.log(target)
    //TODO: Pass the target object into the function and return true or false if the taget is hit


    //To get the click relative to the image: (click location - margin left) + the amount scrolled
    const container = document.getElementById('imgContainer')
    const xPos = event.clientX - container.offsetLeft + container.scrollLeft
    const yPos = event.clientY - container.offsetTop + container.scrollTop
    
    console.log(`X: ${xPos} Y:${yPos}`)



    if((xPos >= target.xloc && xPos <= target.xloc + target.width)&&(yPos >= target.yloc && yPos <= target.yloc+target.height)) {
        console.log("HIT")
        newTarget()
    }

    else console.log("MISS")
}

export default shoot