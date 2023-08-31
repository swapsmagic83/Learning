class Vehicle {
    constructor(make,model,year){
        if(typeof make !== 'string' || typeof model !== 'string' || !Number.isFinite(year)){
           throw new Error('Invalid Info')
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
        if(!(newVehicle instanceof Vehicle)){
            return 'Only vehicles are allowed'
        }
        if(this.vehicles.length>=this.capacity){
            return 'Sorry, We are FULL!!!'
        }
            this.vehicles.push(newVehicle)
            return 'Vehicle added'
        
    }
}