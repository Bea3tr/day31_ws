import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CartEvent } from '../../models';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  images = [ '/fruits/apple.png', '/fruits/carrot.png', '/fruits/broccoli.png', '/fruits/mushroom.png', '/fruits/pumpkin.png']
  descs: String[] = [ 'Apple', 'Carrot', 'Broccoli', 'Mushroom', 'Pumpkin']
  prices: number[] = [ 1.25, 0.65, 1.4, 1.5, 4.5 ]

  @Output()
  addItem = new Subject<CartEvent>()

  addToCart(idx: number) {
    const event: CartEvent = {
      desc: this.descs[idx],
      price: this.prices[idx],
      img: this.images[idx]
    }
    this.addItem.next(event)
  }
}
