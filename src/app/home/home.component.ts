import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title:string="most watched movies by day"
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['PERV', 'NEXT'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }


  imgSrc:string="https://image.tmdb.org/t/p/w500";
  vector:string="../../assets/1.jpg"
  movies: any[] = [];
  moviesArr: any[] = [];
  tvs: any[] = [];
  peoples: any[] = [];
  constructor(private _AuthService: AuthService ) {
  }
 
 
  ngOnInit(): void {
    this.getMovies();
    this.getTvs();
    this.getPeople();
  }
  getMovies() {
    this._AuthService.getTrnding('movie').subscribe({
      next: (data) => {
  
this.moviesArr=data.results
        this.movies=data.results.slice(0,10);
        
      },
    });
  }
  getTvs() {
    this._AuthService.getTrnding('tv').subscribe({
      next: (data) => {
     
        this.tvs = data.results.slice(0,10);;
      },
    });
  }
  getPeople() {
    this._AuthService.getTrnding('person').subscribe({
      next: (data) => {
       

        this.peoples = data.results.slice(0,10);;
      },
    });
  }
}
