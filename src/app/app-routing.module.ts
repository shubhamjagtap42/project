import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformModule } from './loginform/loginform.module';

const routes: Routes = [
  {
    path:'',loadChildren:()=>LoginformModule
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
