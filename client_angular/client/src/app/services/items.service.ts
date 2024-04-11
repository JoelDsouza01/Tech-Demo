import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Items, PaginationParams } from '../../Interfaces/Optiontypes';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private apiService: ApiService) { }

  getItems= (url:string, params: PaginationParams): Observable<Items> => {
    return this.apiService.get(url,{
      params,
      responseType:'json',
    });
  };

  addItem = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editItem = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteItem = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
