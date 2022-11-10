import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
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
  moviesArr: any[] = [];
  constructor(private _AuthService:AuthService) {
   
   }

  ngOnInit(): void { this.getMovies()
    
  }getMovies(){
      this._AuthService.getTrnding('movie').subscribe({
        next: (data) => {
    
  this.moviesArr=data.results
        
          
        },
      });
    }

    }
