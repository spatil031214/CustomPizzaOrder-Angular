export class Order {
    id: number;
    price: number;
    sizeId: number;
    crustId: number;
    toppings: number[];

//    constructor() {
//        
//    }
    setId(newId: number): void {
        this.id = newId;
    }
    setPrice(newPrice: number): void {
        this.price = newPrice;
    }
    setSizeId(newSize: number): void {
        this.sizeId = newSize;
    }
    setToppings(newToppings: number[]): void {
        this.toppings = newToppings;
    }
    setToppingByIdx(idx: number, newTopping: number): void {
        this.toppings[idx] = newTopping;
    }
    setCrustId(newCrust: number): void {
        this.crustId = newCrust;
    }
    getPrice(): number {
        return this.price;
    }
    getSizeId(): number {
        return this.sizeId;
    }
    getCrustId(): number {
        return this.crustId;
    }
    getToppings(): Array<number> {
        return this.toppings;
    }
    getNumToppings(): number {
        let numToppings = 0;
        for (let i = 0; i < this.toppings.length; i++) {
            numToppings += this.toppings[i];
        }
        return numToppings;
    }
}
