import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferingsComponent } from './offerings/offerings.component';

const routes: Routes = [
  { path: '', redirectTo: '/offerings', pathMatch: 'full' },
 
  { path: 'offerings', component: OfferingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
