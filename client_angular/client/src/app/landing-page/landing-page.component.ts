import { Component } from '@angular/core';
import { Item, Items } from '../../Interfaces/Optiontypes';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../services/items.service';
import { ItemsComponent } from '../components/items/items.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ItemsComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private ItemService:ItemsService){}

  items: Item[]=[];
  ngOnInit(){
    this.ItemService.getItems('http://localhost:3000/clothes', {page: 0 , perPage: 6})
    .subscribe((items: Items)=>{
      console.log(items.items);
      this.items = items.items;
    });
  }
}
