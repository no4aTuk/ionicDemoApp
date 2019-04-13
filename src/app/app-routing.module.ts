import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
// ];
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
