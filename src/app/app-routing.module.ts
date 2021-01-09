import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components//home/home.component';
import { WhatIsAiComponent } from './Components//what-is-ai/what-is-ai.component';
import { UseOfAiComponent } from './Components//use-of-ai/use-of-ai.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'what-is-ai', component: WhatIsAiComponent },
  { path: 'use-of-ai', component: UseOfAiComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
