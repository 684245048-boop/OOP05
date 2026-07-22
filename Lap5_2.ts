class Book {
    public readonly isbn: string;
    public title: string;
    private isBorrowed: boolean;

    constructor(isbn: string, title: string, borrowed: boolean) {
        this.isbn = isbn; 
        this.title = title;
        this.isBorrowed = borrowed;
    }

    public borrowBook() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`คุณยืมหนังสือ ${this.title} เรียบร้อยแล้ว`);
        } else {
            console.error(`หนังสือ ${this.title} ถูกยืมไปแล้ว ไม่อยู่ในห้องสมุด`);
        }
    }
    public returnBook(){
        if (this.isBorrowed){
            this.isBorrowed = false;
            console.log(`คุณคืนหนังสือ ${this.title} เรียบร้อยแล้ว`);
        }else{
            console.error(`หนังสือ ${this.title} ยังไม่ได้ถูกยืมออกไป`);
        }
    }
}

const book1 = new Book("88547458455", "OOP with TypeScript", false);
book1.borrowBook();
book1.borrowBook();
book1.returnBook();
book1.returnBook();