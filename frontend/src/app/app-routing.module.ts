import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/dishes', pathMatch: 'full'},
  {path: 'dishes', loadChildren: 'app/dishes/dishes.module#DishesModule'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
