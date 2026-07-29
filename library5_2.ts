class Book {
    public readonly isbn: string;
    public title: string;
    private _author: string;
    private _price: number;
    private _stock: number;

    constructor(isbn: string, title: string, author: string, price: number, stock: number = 0) {
        this.isbn = isbn;
        this.title = title;
        this._author = author;
        this._price = price;
        this._stock = stock;
    }
    get author(): string {
        return this._author;
    }
    set author(newAuthor: string) {
        if (newAuthor.trim() !== "") {
            this._author = newAuthor;
        } else {
            console.log("ข้อผิดพลาด: ชื่อผู้แต่งไม่สามารถเป็นค่าว่างได้");
        }
    }
    get price(): number {
        return this._price;
    }
    set price(newPrice: number) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            console.log("ข้อผิดพลาด: ราคาไม่สามารถติดลบได้");
        }
    }
    get stock(): number {
        return this._stock;
    }
    set stock(newStock: number) {
        if (newStock >= 0 && Number.isInteger(newStock)) {
            this._stock = newStock;
        }
    }
    get isAvailable(): boolean {
        return this._stock > 0;
    }
    public purchase(amount: number): void {
        if (this._stock >= amount) {
            this._stock -= amount;
            console.log(`ซื้อหนังสือ ${this.title} สำเร็จ จำนวน ${amount} เล่ม`);
        } else {
            console.log(`สินค้าไม่เพียงพอสำหรับ ${this.title}. จำนวนคงเหลือปัจจุบัน: ${this._stock}`);
        }
    }
    public getDiscountedPrice(percentage: number): string {
        const discountAmount = this._price * (percentage / 100);
        const finalPrice = this._price - discountAmount;
        return `ราคาหลังหักส่วนลด: $${finalPrice.toFixed(2)}`;
    }
}

const myBook = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 45, 10);
myBook.price = -10;
myBook.purchase(15);
console.log(`หนังสือ "${myBook.title}" มีพร้อมจำหน่ายหรือไม่? : ${myBook.isAvailable}`);