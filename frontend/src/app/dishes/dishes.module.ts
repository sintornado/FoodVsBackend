import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesFormComponent } from './dishes-form/dishes-form.component';
import { DishesEditComponent } from './dishes-edit/dishes-edit.component';
import { DishesAddComponent } from './dishes-add/dishes-add.component';
import { DishesRoutingModule } from './dishes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DishesRoutingModule
  ],
  declarations: [DishesListComponent, DishesFormComponent, DishesEditComponent, DishesAddComponent]
})
export class DishesModule { }
