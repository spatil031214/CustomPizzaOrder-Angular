import { Component }        from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { OrderingService }  from '../shared/ordering.service';
import { Order }            from '../shared/order';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent {
   constructor( private _orderingService: OrderingService ) { };
}