import { Component, EventEmitter, Input, Output,ViewChild, } from '@angular/core';
import { Item } from '../../../Interfaces/Optiontypes';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { PricePipe } from '../../pipes/price.pipe';
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RatingModule, FormsModule,ButtonModule,
    ConfirmPopupModule,
    ToastModule,
    PricePipe,
    TruncateNamePipe, ],
    providers: [ConfirmationService],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  constructor(private confirmationService: ConfirmationService) {}

  @ViewChild('deleteButton') deleteButton: any;
  
  @Input() item!: Item;
  @Output() edit: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>();

  editItem() {
    this.edit.emit(this.item);
  }

  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this item?',
      accept: () => {
        this.deleteItem();
      },
    });
  }

  deleteItem() {
    this.delete.emit(this.item);
  }

  ngOnInit(){}
}
