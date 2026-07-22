class Thermostat{
    private _temperature: number = 0;
    get temperature():number{
        return this._temperature;        
    }
    set temperature(value: number){
        if(value>=15 && value<30){
            this._temperature = value;
            console.log("อุณหภูมิอยู่ระหว่าง 15 ถึง 30 องศา");
        }else{
            console.error("อุณหภูมิอยู่นอกช่วงที่กำหนด (15-30°C)");
        }

    }
}
const A1 = new Thermostat();
A1.temperature = 35;
console.log(A1.temperature);