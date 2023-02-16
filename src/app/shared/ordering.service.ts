import { Injectable }           from '@angular/core';
// import { Http, Response }       from '@angular/http';

// import 'rxjs/add/operator/toPromise';

import { Order }                from './order';
import { Crust }                from './crust';
import { Size }                 from './size';
import { Topping }              from './topping';

@Injectable({ providedIn: 'root' })
export class OrderingService {
    lastId: number = 0;
    
    ordersArr: Array<Order>     = [];
    crustsArr: Array<Crust>     = [];
    sizesArr: Array<Size>       = [];
    toppingsArr: Array<Topping> = [];

    selectedOrder: Order;
    
    // constructor(private netConnect: Http) {
    //     this.crustsArr      = [];
    //     this.sizesArr       = [];
    //     this.toppingsArr    = [];
    //  };

    //  getMessage(): Promise<String> {
    //      // TODO create constants to URL
    //     let url = "http://localhost:3000/db";
    //     let handleSuccess = (response: any): Object => {
    //         return response.json();
    //     };
        
    //     let handleError = (error: any) => {
    //         return Promise.reject("Error");
    //     }
    //     return this.netConnect.get(url).toPromise()
    //         .then(handleSuccess)
    //         .catch(handleError);
    //  }

     setCrusts(crustsArr: Array<Crust>): void {
        // TODO check a better solution to create/override the array
        if (this.crustsArr.length > 0) {
            for (let idx in crustsArr) {
                this.crustsArr[idx] = crustsArr[idx];
            }
        } else {
            for (let idx in crustsArr) {
                this.crustsArr.push(crustsArr[idx]);
            }
        }
     }
     setSizes(sizesArr: Array<Size>): void {
        // TODO check a better solution to create/override the array
        if (this.sizesArr.length > 0) {
            for (let idx in sizesArr) {
                this.sizesArr[idx] = sizesArr[idx];
            }
        } else {
            for (let idx in sizesArr) {
                this.sizesArr.push(sizesArr[idx]);
            }
        }
     }
     setToppings(toppingsArr: Array<Topping>): void {
        // TODO check a better solution to create/override the array
        if (this.toppingsArr.length > 0) {
            for (let idx in toppingsArr) {
                this.toppingsArr[idx] = toppingsArr[idx];
            }
        } else {
            for (let idx in toppingsArr) {
                this.toppingsArr.push(toppingsArr[idx]);
            }
        }
     }

    addOrder(): Order {
        let order = new Order();
        
        // set default values to the order   
        order.setId(++this.lastId);
        order.setSizeId(0);
        order.setCrustId(0);
        order.setPrice(0);
        // TODO ... set Topping to the same sizesArr of Array
        order.setToppings([0,0,0,0,0,0])
        this.ordersArr.push(order);
        
        return order;
    }
    getCrusts(): Array<Crust> {
        return this.crustsArr;
    }
    getSizes(): Array<Size> {
        return this.sizesArr;
    }
    getToppings(): Array<Topping> {
        return this.toppingsArr;
    }
    getOrders(): Array<Order> {
        return this.ordersArr;
    }
    getNumOrders(): number {
        return this.ordersArr.length;
    }
    getTotalCostOrder(): number {
        let totalOrder = 0;
        for (let i in this.ordersArr) {
            totalOrder += this.ordersArr[i].price;
        }
        return totalOrder;
    }
    setSelectedOrder(order: Order): void {
        this.selectedOrder = order;
    }
};
