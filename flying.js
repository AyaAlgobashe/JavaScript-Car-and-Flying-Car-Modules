import { Car } from "./car.js";
class FlyingCar extends Car {
    constructor(model,year,canFly=true){
        super(model,year)
        this.canFly=canFly;

    }
    
    toString(){
        const carData =super.toString()

        if(this.canFly=true){
            return(` ${carData} I can fly`)
        }
        else return(`  ${carData} I can't fly`)
    }
}
export {FlyingCar}

