class User {
    private _age: number = 0;

    set age(value: number) {
        if (value >= 0) {
            this._age = value; 
        } else {
            console.error("อายุไม่สามารถติดลบได้"); 
        }
    }
    get age(): number {
        return this._age;
    }
}

const user1 = new User();
user1.age = 25; 
console.log("อายุปัจจุบัน:", user1.age);
user1.age = -5; 
console.log("อายุหลังพยายามใส่ค่าติดลบ:", user1.age);