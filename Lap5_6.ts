class Wallet {
    private _balance: number;
    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }
    get formattedBalance(): string {
        return "$" + this._balance;
    }
    set balance(newAmount: number) {
        if (newAmount >= 0) {
            this._balance = newAmount;
        }
    }
    get balanceInTHB(): number {
        return this._balance * 33.5;
    }
}
let myWallet = new Wallet(150); 
console.log(myWallet.formattedBalance); 
console.log("เงินบาท: " + myWallet.balanceInTHB); 
myWallet.balance = 50; 
console.log("ยอดใหม่: " + myWallet.formattedBalance); 
myWallet.balance = -20;
console.log("ยอดหลังแอบใส่ค่าติดลบ: " + myWallet.formattedBalance); 
