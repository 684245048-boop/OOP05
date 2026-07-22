class FitnessProfile {
    private _weight: number = 0;
    private _height: number = 0; 
    set weight(value: number) {
        if (value > 0) {
            this._weight = value;
        } else {
            console.error("น้ำหนักต้องเป็นค่าบวก (มากกว่า 0) เท่านั้น");
        }
    }
    get weight(): number {
        return this._weight;
    }
    set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error("ส่วนสูงต้องเป็นค่าบวก (มากกว่า 0) เท่านั้น");
        }
    }
    get height(): number {
        return this._height;
    }
    get bmi(): number {
        if (this._height === 0) {
            return 0; 
        }
        return this._weight / (this._height * this._height); 
    }
}
const userProfile = new FitnessProfile();
userProfile.weight = 70;   
userProfile.height = 1.75;
userProfile.weight = -50; 
console.log("น้ำหนัก:", userProfile.weight, "kg");
console.log("ส่วนสูง:", userProfile.height, "m");
console.log("ค่า BMI ของคุณคือ:", userProfile.bmi);