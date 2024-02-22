
export {Car};
    class Car {
        constructor(model,year){
            this.model=model;
            this.year=year

        }
         toString(){
            return(`Model car is ${this.model} and year is ${this.year}`)
        }
    }

