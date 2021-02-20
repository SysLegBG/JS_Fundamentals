class Vehicle {
    constructor(type, model, parts, fuel) {
        parts.quality = parts.engine * parts.power;
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;        
    }

    drive(n){
        this.fuel -= n;
    }
}