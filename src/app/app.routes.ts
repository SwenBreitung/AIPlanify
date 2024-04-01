
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { initializeApp } from '@angular/fire/app';
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }