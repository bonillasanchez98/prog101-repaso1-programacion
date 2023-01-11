class Car {
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;
    
    private readonly createAt: number;

    constructor( brand: string, type: string){
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createAt = 123123
    }

    fillTank( gas:number ){
        if( gas <= 0 ){
            console.log('El gas debe ser positivo');
            return;
        }
        let newFuelTank = this.fuelTank + gas;
        if(newFuelTank >= 100){
            this.fuelTank = 100;
            console.log('FuelTank: ' + this.fuelTank);
            return;
        }else{
            console.log(this.fuelTank = newFuelTank);
        }
    }

    turnOn(){
        if( this.isRunning){
            console.log('El carro ya estaba encendido....dañaste el motor');
            return;
        }
        if( this.fuelTank <= 0){
            console.log('El carro no tiene gasolina');
            return;
        }
        this.isRunning = true;
        console.log('El carro esta encendido');
    }
}


let myKia = new Car('Kia', 'Coope');
//console.log(myKia);
console.log(myKia.fuelTank);//Revisando el tanque del carro
console.log(myKia.fillTank(50)); //Echando(50) gasolina al tanque
console.log(myKia.fillTank(20)); //Echando(90) gasolina al tanque
