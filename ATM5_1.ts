export {};

class Wallet {
    private cash: number;

    constructor(initialCash: number) {
        this.cash = initialCash;
    }
    addCash(amount: number): void {
        if (amount > 0) {
            this.cash += amount;
            console.log(`ฝากเงินสำเร็จ: ${amount} บาท | ยอดคงเหลือ: ${this.cash} บาท`);
        }
    }
    withdrawCash(amount: number): void {
        if (amount > this.cash) {
            console.log(`ถอนเงินล้มเหลว: ยอดเงินไม่พอ! (ต้องการถอน ${amount} แต่มีเงินแค่ ${this.cash})`);
        } else if (amount > 0) {
            this.cash -= amount;
            console.log(`ถอนเงินสำเร็จ: ${amount} บาท | ยอดคงเหลือ: ${this.cash} บาท`);
        }
    }
}
class ATMUser {
    readonly accountNumber: string;
    myWallet: Wallet;
    constructor(accNumber: string, initialCash: number) {
        this.accountNumber = accNumber;
        this.myWallet = new Wallet(initialCash);
    }
}

const user1 = new ATMUser("NPRU-12345", 500);
console.log(`เริ่มต้นจำลองการใช้งานบัญชี: ${user1.accountNumber}`);
user1.myWallet.addCash(200); 
user1.myWallet.withdrawCash(1000); 
user1.myWallet.withdrawCash(300);
