// Declare speed as a variable  and assigne a value
let speed = 135
// create a function for the varible speed 
function speedcheck(speed){
    const limit=70
    const pointLimit= 5;
// create a condition if the speed limit is less than 70 to output  ok
if(speed<=limit){
    console.log("Your speed is ok");
}
//else the speed is greater than 70 we calculate the points for over speeding if 5km/s is equals to 1 point
else{
    points = Math.floor((speed-limit)/5);
    console.log(`Your points are:${points}`);
// if the points are more than 12 then the drivers license is suspended
    if(points >= pointLimit){
        console.log("Your license has been suspended")
    }
}

}
// callback the function speedcheck
speedcheck(speed)