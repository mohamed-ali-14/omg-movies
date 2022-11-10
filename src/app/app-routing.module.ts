import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailComponent } from './peopledetail/peopledetail.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailComponent } from './tvdetail/tvdetail.component';

const routes: Routes = [
  {path:"" ,redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard], component:HomeComponent},
  {path:"main", component:MainComponent},
  {path:"about",canActivate:[AuthGuard], component:AboutComponent},
  {path:"movies",canActivate:[AuthGuard], component:MoviesComponent},
  {path:"network",canActivate:[AuthGuard],component:NetworkComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"tv",canActivate:[AuthGuard], component:TvComponent},
  {path:"movie/:id",canActivate:[AuthGuard],component:MoviedetailComponent},
  {path:"tv/:id",canActivate:[AuthGuard],component:TvdetailComponent},
  {path:"person/:id",canActivate:[AuthGuard],component:PeopledetailComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
