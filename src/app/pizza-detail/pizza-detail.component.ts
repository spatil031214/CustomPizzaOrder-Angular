import { Component, Input }     from '@angular/core';
import { FormsModule }          from '@angular/forms';

import { OrderingService }      from '../shared/ordering.service';

import { Order }                from '../shared/order';
import { Crust }                from '../shared/crust';
import { Size }                 from '../shared/size';
import { Topping }              from '../shared/topping';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
    private _order: Order;
    
    // initial arrays
    sizes: Array<Size>;;
    crusts: Array<Crust>;;
    toppings: Array<Topping>;;

    // initial variables
    sizePrice;
    crustPrice;
    toppingsRemain = 10;

    @Input() 
    set order(order: Order) {
        if ((typeof order != "undefined") && (order)) {
            // get selected Order's values
            this._order = order;

            // set order's values into pizza's variables 
            this.sizePrice = this.sizes[this._order.getSizeId()].price;
            this.crustPrice = this.crusts[this._order.getCrustId()].price;
            this.toppingsRemain = 10 - this._order.getNumToppings();
            
            // set toppings values 
            this.selectedTopping = null;
            let arrTopping=this._order.getToppings();
            for (let i in arrTopping) {
                this.toppings[i].qt=arrTopping[i];
            }
            
            // set pizza's price
            this._order.setPrice(this.price());
        } else {
            this._order = null;
        }
    }

    // set array of orders into OrderingService
    orders: Array<Order>;
    constructor(private _orderingService: OrderingService) {
        this.sizes = _orderingService.getSizes();
        this.crusts = _orderingService.getCrusts();
        this.toppings = _orderingService.getToppings();
        this.orders=_orderingService.getOrders();
    }

    // calculates pizza's price
    price(): number {
        let sum:number = 0.0;
        sum += this.sizePrice;
        sum += this.crustPrice;

        for(let i =0; i < this.toppings.length; i ++){
            sum += this.toppings[i].price * this.toppings[i].qt;
        }

        return sum;
    };

    // update size's data
    updateSize(selectedSize : any): void {
        let newSize = this.sizes.find( item => item.id == selectedSize );
        this.sizePrice = newSize.price;

        // set new price and size into orders
        this._order.setSizeId(newSize.id);
        this._order.setPrice(this.price());
    }

    // update crust's data
    updateCrust(selectedCrust : any) {
        let newCrust = this.crusts.find( item => item.id == selectedCrust );
        this.crustPrice = newCrust.price;

        // set new price and crust into orders
        this._order.setCrustId(newCrust.id);
        this._order.setPrice(this.price());
    }

    // add toppings
    addToppingNew(topping: Topping) {
        this.selectedTopping = topping;
        this.addTopping(this.selectedTopping.qt);
    }
    addTopping(qtTopping : number) {
        this.selectedTopping.qt += 1;
        this.toppingsRemain -= 1;

        // set new price and toppings into orders
        this._order.setToppingByIdx(this.selectedTopping.id, this.selectedTopping.qt);
        this._order.setPrice(this.price());
    }

    // subtract toppings
    subractToppingNew(topping: Topping) {
        this.selectedTopping = topping;
        this.subractTopping(this.selectedTopping.qt);
    }
    subractTopping(qtTopping : number) {
        this.selectedTopping.qt -= 1;
        this.toppingsRemain += 1;

        // set new price and toppings into orders
        this._order.setToppingByIdx(this.selectedTopping.id, this.selectedTopping.qt);
        this._order.setPrice(this.price());
    }

    // set selected toppings to edit
    selectedTopping: Topping;
    // onSelect(topping: Topping): void {
    //     this.selectedTopping = topping;
    // }
}
