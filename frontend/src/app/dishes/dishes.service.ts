import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dish } from './models/Dish';

const url = "http://localhost:3000/api/dishes";

@Injectable()
export class DishesService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Dish[]>{
    return this.http.get<Dish[]>(url);
  }

  get(id: number): Observable<Dish>{
    return this.http.get<Dish>(url + '/' + id);
  }

  deleteDish(dishId: string) {
    const url = this.getDishUrl(dishId);
    return this.http.delete(url);
  }

  getDishUrl(id: string): string{
    return `${url}/${id}`;
  }

  addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(url, dish);
  }

  updateDish(dish: Dish) {
    const url = this.getDishUrl('dish.id');

    return this.http.put<Dish>(url, dish);
  }

}
