class Product{
    private _price: number = 0;
    get price():number{
        return this._price;
    }
    set price(value:number){
        if(value >0){
        this._price = value;
        }else{
            console.error("ไม่สามารถกำหนดราคาสินค้าเป็นลบ");
        }
    }

}
const laptop = new Product();
laptop.price = 2500;
console.log(laptop.price);
const pirnter = new Product();
laptop.price = -250;
console.log(laptop.price);