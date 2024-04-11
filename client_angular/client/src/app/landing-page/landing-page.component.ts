import { Component } from '@angular/core';
import { Item, Items } from '../../Interfaces/Optiontypes';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../services/items.service';
import { ItemsComponent } from '../components/items/items.component';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ItemsComponent, CommonModule , PaginatorModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private ItemService:ItemsService){}

  items: Item[]=[];
totalRecords: number = 0;
rows:number = 6;

  onItemOutput(item:Item){
    console.log(item, "Output");
  }

onPageChange(event: any){
  this.getItems(event.page, event.rows);
}

getItems(page:number, perPage: number){
  this.ItemService.getItems('http://localhost:3000/guitars', {page, perPage})
  .subscribe((items: Items)=>{
    this.items = items.items;
    this.totalRecords = items.total;
  });
}

  ngOnInit(){
    this.getItems(0,this.rows);
  }
}
