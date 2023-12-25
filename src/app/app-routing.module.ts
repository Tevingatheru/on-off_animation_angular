import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularButtonAnimationComponent } from './angular-button-animation/angular-button-animation.component';

const routes: Routes = [
  {path: '', component: AngularButtonAnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
