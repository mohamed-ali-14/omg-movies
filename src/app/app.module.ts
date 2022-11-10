import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { FormsModule } from '@angular/forms';

import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { RouterModule } from '@angular/router';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TvdetailComponent } from './tvdetail/tvdetail.component';
import { PeopledetailComponent } from './peopledetail/peopledetail.component';
import { MainComponent } from './main/main.component';
import { SearchPipe } from './search.pipe';
import { SearchtPipe } from './searcht.pipe';
import { SearchpPipe } from './searchp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TvComponent,
    PeopleComponent,
    NetworkComponent,
    NotfoundComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    NavbarComponent,
    MoviedetailComponent,
    TvdetailComponent,
    PeopledetailComponent,
    MainComponent,
    SearchPipe,
    SearchtPipe,
    SearchpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
