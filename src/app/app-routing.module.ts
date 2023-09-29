import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'task', loadChildren: ()=> import('./modules/proyect/proyect.module').then(m=>m.ProyectModule)
  },
  {
    path:'**' , redirectTo:'task'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
