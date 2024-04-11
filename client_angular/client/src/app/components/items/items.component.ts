import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../Interfaces/Optiontypes';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RatingModule, FormsModule ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  @Input() item!: Item;
  @Output() itemOutput: EventEmitter<Item> = new EventEmitter<Item>();

  ngOnInit(){
    this.itemOutput.emit(this.item);
  }
}
