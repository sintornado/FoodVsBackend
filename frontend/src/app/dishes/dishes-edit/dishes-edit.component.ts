import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Dish } from '../models/Dish';

import 'rxjs/add/operator/switchMap';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-dishes-edit',
  templateUrl: './dishes-edit.component.html',
  styleUrls: ['./dishes-edit.component.css']
})
export class DishesEditComponent implements OnInit {
  dish$: Observable<Dish>

  constructor(private route: ActivatedRoute, private dishesService: DishesService, private router: Router) { }

  ngOnInit() {
    this.dish$ = this.route.paramMap
      .switchMap((param: ParamMap) => this.dishesService.get(+param.get('id')))
  }

  onSaveDish(dish: Dish){
    this.dishesService.updateDish(dish).subscribe(()=> this.router.navigate(['../../'],{ relativeTo: this.route }));
  }

}
