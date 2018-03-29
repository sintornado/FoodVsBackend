import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DishesService } from '../dishes.service';
import { Dish }  from '../models/Dish'; 
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.css']
})
export class DishesAddComponent implements OnInit {

  dish: Dish

  constructor(private dishesService: DishesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dish = new Dish;
  }

  onSaveDish(dish: Dish){
    this.dishesService.addDish(dish)
      .subscribe(() => this.router.navigate(['../'],{relativeTo: this.route}))
  }

}
