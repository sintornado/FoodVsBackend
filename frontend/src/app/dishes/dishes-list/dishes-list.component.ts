import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DishesService } from '../dishes.service';
import  { Dish }  from '../models/Dish'; 

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  list$: Observable<Dish[]>
  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.list$ = this.dishesService.getList();
  }

}
