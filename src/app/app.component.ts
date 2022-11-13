import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.module';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
   <app-header [cart]="cart"></app-header>
   <router-outlet></router-outlet>
   
  `,
  styles: []
})
export class AppComponent implements OnInit{
  cart: Cart = {items:[]}

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
}
