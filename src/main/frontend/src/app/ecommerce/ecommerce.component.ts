import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component"

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
    public collapsed = true;
    orderFinished = false;

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    @ViewChild('loginC')
    loginC: LoginComponent;

    @ViewChild('registerC')
    registerC: RegisterComponent;


    constructor() {
    }

    ngOnInit() {
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
    
}