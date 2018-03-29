import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesFormComponent } from './dishes-form/dishes-form.component';
import { DishesEditComponent } from './dishes-edit/dishes-edit.component';
import { DishesAddComponent } from './dishes-add/dishes-add.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishesService } from './dishes.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DishesRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  declarations: [DishesListComponent, DishesFormComponent, DishesEditComponent, DishesAddComponent],
  providers: [DishesService]
})
export class DishesModule { }
