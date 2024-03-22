// Code your solution in this file!

const distance = function distanceFromHqInBlocks(street1, street2){
    let totalblocks = street1 - street2
    console.log(totalblocks)
    return Math.abs(totalblocks);
}
console.log(distance(43,42))
console.log(distance(50,42))
console.log(distance(42-38))

