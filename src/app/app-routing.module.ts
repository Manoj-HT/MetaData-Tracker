import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Screen2Component } from './components/screen2/screen2.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'screen2',
    component : Screen2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
