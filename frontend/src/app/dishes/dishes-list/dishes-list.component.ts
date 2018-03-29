import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DishesService } from '../dishes.service';
import { Dish }  from '../models/Dish'; 
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  list$: Observable<Dish[]>

  displayedColumns = ['name', 'price', 'action'];
  
  
  constructor(private dishesService: DishesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.list$ = this.dishesService.getList();
  }

  deleteDish(id: string){
    this.list$ = this.dishesService.deleteDish(id)
      .switchMap(() => this.dishesService.getList())
      // .subscribe((data) => this.getList(data));
  }

  addDish(){
    this.router.navigate(['./add'], {relativeTo: this.route});
  }

}
