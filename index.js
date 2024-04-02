// Code your solution in this file!


// function distaFromHqInBlocks(totalblocks){
//     let street1 = 43
//     let street2 = 50;
//     let street3 = 34;
//     totalblocks= street1 - 42,street2 - 42, 42 - street3; // Get the value of the blocks per street
//     console.log(distaFromHqInBlocks);

//     return totalblocks ;
// }
// console.log(totalblocks);
// //get the total distance in feet
// function distanceFromHqInFeet(totalfeet){
//     // each block = 264
//     blocks = 264/43; 
//     console.log(distanceFromHqInFeet);

//     return 43 * blocks;

// }




function distanceFromHqInBlocks(Value){
  
    return   Math.abs(Value - 42);
    
}
console.log (distanceFromHqInBlocks(43));


function distanceFromHqInFeet(value){

    return distanceFromHqInBlocks(value) * 264;
}
console.log (distanceFromHqInFeet(43))



function distanceTravelledInFeet(start,destination){

    return Math.abs(destination - start) * 264;
}
console.log(distanceFromHqInFeet(38,34))

function calculatesFarePrice(start, destination){
    const distance = distanceFromHqInFeet(start, destination);

    if (distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 2.56;
    }else if(distance > 2000 && distance <= 2500){
        return 25;
    }else if(distance > 2500){
        return 'cannot travel that far'}
}