import { Component }        from '@angular/core';
import { FormsModule }      from '@angular/forms';
// import { Headers, Http }    from '@angular/http';

// import 'rxjs/add/operator/toPromise';

import { OrderingService }  from '../shared/ordering.service';
import { Order }            from '../shared/order';
import { Crust }            from '../shared/crust';
import { Size }             from '../shared/size';
import { Topping }          from '../shared/topping';
import { Region }           from '../shared/region';

import { REGIONS }          from '../shared/mock-region';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    ordersArr: Array<Order>;
    selectedOrder: Order;

    // constructor(private _orderingService: OrderingService, private http: Http) {
    constructor(private _orderingService: OrderingService) {
        this.ordersArr=_orderingService.getOrders();
    }

    name: String = 'Talking to server example';
    msg: String = '';

    // TODO set data from server
    regionsArr: Array<Region>;
    // TODO review this language settings
    languagesArr: Array<String> = [];

    isSelectLang = false;
    
    ngOnInit(): void {
        this.regionsArr = REGIONS;
        this.languagesArr.push(this.regionsArr[0].lang); 
        this.selectedMenu(this.regionsArr[0].lang);
        // this._orderingService.getMessage()
        //     .then( (iStr: Object) => {
        //         this.msg = "*** Server receives JSON OK!";
        //         console.log(this.msg);
        //         this.language = Object.assign(iStr);
                
        //         // TODO select on HTML without  var "languagesArr"
        //         this.languagesArr.push(this.language.menu[0].lang); 
        //         this.languagesArr.push(this.language.menu[1].lang); 
        //         this.selectedMenu(this.languagesArr[0]);
        //     }).catch( () => {
        //         this.msg = "*** Server error!!!";
        //         console.log(this.msg);
        //     });
    }

    selectedMenu(selected: String) : void {
        let idx = this.languagesArr.indexOf(selected);

        this._orderingService.setCrusts(this.regionsArr[idx].crustsArr);
        this._orderingService.setSizes(this.regionsArr[idx].sizesArr);
        this._orderingService.setToppings(this.regionsArr[idx].toppingsArr);
    }

    // add new order
    addOrder(){
        this.isSelectLang = true;
        this.selectedOrder = this._orderingService.addOrder();
        this._orderingService.setSelectedOrder(this.selectedOrder); 
    }

    // remove selected order
    removeOrder(order: Order): void {
        let obj = this.ordersArr.find(x => x.id == order.id);
        this.ordersArr.splice(this.ordersArr.indexOf(obj),1);
        this.selectedOrder = null;
    }
    
    // set to edit selected order
    onSelect(order: Order): void {
        this.selectedOrder = order;
    }
}
