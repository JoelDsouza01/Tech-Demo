import { Component, ViewChild  } from '@angular/core';
import { Item, Items } from '../../Interfaces/Optiontypes';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../services/items.service';
import { ItemsComponent } from '../components/items/items.component';
import { Paginator, PaginatorModule  } from 'primeng/paginator';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ItemsComponent, CommonModule , PaginatorModule EditPopupComponent, ButtonModule,],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private ItemService:ItemsService){}

  @ViewChild('paginator') paginator: Paginator | undefined;

  items: Item[]=[];
totalRecords: number = 0;
rows:number = 12;

displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;

  toggleEditPopup(item: Item) {
    this.selectedItem = item;
    this.displayEditPopup = true;
  }

  toggleDeletePopup(item: Item) {
    if (!item.id) {
      return;
    }

    this.deleteItem(item.id);
  }

  toggleAddPopup() {
    this.displayAddPopup = true;
  }

  selectedItem: Item = {
    id: 0,
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  onConfirmEdit(item: Item) {
    if (!this.selectedItem.id) {
      return;
    }

    this.editItem(item, this.selectedItem.id);
    this.displayEditPopup = false;
  }

  onConfirmAdd(item: Item) {
    this.addItem(item);
    this.displayAddPopup = false;
  }


  onItemOutput(item:Item){
    console.log(item, "Output");
  }

onPageChange(event: any){
  this.getItems(event.page, event.rows);
}

resetPaginator() {
  this.paginator?.changePage(0);
}

getItems(page:number, perPage: number){
  this.ItemService.getItems('http://localhost:3000/guitars', {page, perPage})
  .subscribe({
    next: (data: Items) => {
      this.items = data.items;
      this.totalRecords = data.total;
    },
    error: (error) => {
      console.log(error);
    },
  });
}


editItem(item: Item, id: number) {
  this.ItemService
    .editItem(`http://localhost:3000/guitars/${id}`, item)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.getItems(0, this.rows);
        this.resetPaginator();
      },
      error: (error) => {
        console.log(error);
      },
    });
}

deleteItem(id: number) {
  this.ItemService
    .deleteItem(`http://localhost:3000/guitars/${id}`)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.getItems(0, this.rows);
        this.resetPaginator();
      },
      error: (error) => {
        console.log(error);
      },
    });
}

addItem(item: Item) {
  this.ItemService
    .addItem(`http://localhost:3000/guitars`, item)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.getItems(0, this.rows);
        this.resetPaginator();
      },
      error: (error) => {
        console.log(error);
      },
    });
}

  ngOnInit(){
    this.getItems(0,this.rows);
  }
}
