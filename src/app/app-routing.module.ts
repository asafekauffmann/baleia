import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pag1Component } from './page/pag1/pag1.component';
import { Page2Component } from './page/page2/page2.component';

const routes: Routes = [
  {
    path: "", component: Pag1Component
  }, 
  {
    path: "pg2", component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
