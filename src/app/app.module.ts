import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }      from './shared/in-memory-data.service';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';

import { DashboardComponent }       from './dashboard/dashboard.component';
import { OrderSummaryComponent }    from './order-summary/order-summary.component';
import { PizzaDetailComponent }     from './pizza-detail/pizza-detail.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent, DashboardComponent, OrderSummaryComponent, PizzaDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }