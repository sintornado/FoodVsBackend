import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesEditComponent } from './dishes-edit/dishes-edit.component';
import { DishesAddComponent } from './dishes-add/dishes-add.component';

const routes: Routes = [
    { path: '/', component: DishesListComponent},
    { path: 'edit/:id', component: DishesEditComponent},
    { path: 'add', component: DishesAddComponent},
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
  })
  export class DishesRoutingModule { }
  