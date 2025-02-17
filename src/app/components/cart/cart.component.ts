import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input()
  items: String[] = []

  @Input()
  quantity: number[] = []

  @Input()
  imgs: String[] = []

  @Input()
  prices: number[] = []

  @Input()
  total = 0

  removeItem(idx: number) {
    this.total -= this.prices[idx]
    this.items.splice(idx, 1)
    this.quantity.splice(idx, 1)
    this.imgs.splice(idx, 1)
    this.prices.splice(idx, 1)
    console.log('>>> Removed item: ' + this.items)
  }
  
}
