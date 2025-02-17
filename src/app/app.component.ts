import { Component, Input } from '@angular/core';
import { CartEvent } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31-ws'
  idx = 0

  imgs: String[] = []
  items: String[] = []
  quantity: number[] = []
  prices: number[] = []

  total = 0

  addItemToCart($event: CartEvent) {
    if (this.items.includes($event.desc)) {
      this.idx = this.items.indexOf($event.desc)
      this.quantity[this.idx] += 1
      this.prices[this.idx] += $event.price
    } else {
      this.items.push($event.desc)
      this.quantity.push(1)
      this.prices.push($event.price)
      this.imgs.push($event.img)
    }
    this.total += $event.price
    console.log('>>> Items added: ' + this.items)
    console.log('>>> Quantity: ' + this.quantity)
    console.log('>>> Image: ' + this.imgs)
  }
}
