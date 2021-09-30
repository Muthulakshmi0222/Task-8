class UberCab{
    constructor(distance,Time,TypeofCar){
        this.distance=distance;
        this.Time=Time;
        this.TypeofCar=TypeofCar;
    }
}
var Distance=prompt("The distance:",this.distance);
var time=prompt("The Time of the Date:",this.Time);
var typeofCar=prompt("The Type of Car:",this.TypeofCar);
console.log(Distance,",",time,",",typeofCar);
function price(Distance,time){
    if(Distance<=5){
        var price=2+(2*time);
        return price;
    }else{
        var price=5+(5*time)
        return price;
    }
}
console.log(price(Distance,time));