class Vehicle {
    constructor(make,model,year){
        if(typeof make !== 'string' || typeof model !== 'string' || !Number.isFinite(year)){
            return 'Only vehicles are allowed in here'
        }
        this.make=make
        this.model=model
        this.year=year
    }
    honk(){
        return "Beep."
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels =4;
    }
}

class MotorCycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels=2
    }
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage{
    constructor(capacity){
        this.vehicles=[]
        this.capacity= capacity
    }
    add(newVehicle){
        if(this.vehicles.length>=this.capacity){
            return 'Sorry, We are FULL!!!'
        }else{
            this.vehicles.push(newVehicle)
            return 'Vehicle added'
        }
    }
}