class BankAccount{
    public readonly accountNo: string = "";
    public balance: number = 0;
    constructor(accno:string){
        this.accountNo = accno;
    }
    public deposit(d: number){
        if(d>0){
            this.balance+=d;
            console.log("ฝากเงิน" +d+ "บาท เข้าบัญชี:" + this.accountNo);
        }else{
            console.error("ต้องฝากด้วยค่าที่เป็นบวกเท่านั้น");
        }    
    }
    public withdraw(w: number){
        if(this.balance<w){
            console.log(`ยอดเงินคุณไม่เพียงพอ ${this.balance}ไม่เพียงพอกับที่ต้องการถอน ${w}`);
        }else {
            this.balance -= w;
            console.log("ถอนเงิน: " + w + " บาท เข้าบัญชี: " + this.accountNo + " ยอดเงินคงเหลือ: " + this.balance);
        }
    }
    
    public showBal(){
        return this.balance;
    }
}

const account2 = new BankAccount("87456321");
account2.deposit(5000);
account2.deposit(500);
console.log(account2.accountNo);
account2.withdraw(10000)