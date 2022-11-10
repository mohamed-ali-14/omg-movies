import { Component, OnInit } from '@angular/core';


import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  currentnum: number = 1;
  num2: number = this.currentnum + 1;
  num3: number = this.currentnum + 2;
  moviesArr: any[] = [];
  newSearch:string="";
  constructor(private _AuthService: AuthService , private _SearchService:SearchService) { 
    if(localStorage.getItem('currentnum') !=null){
      let x:any = localStorage.getItem("currentnum")
      this.currentnum= +x
      this.num2=this.currentnum+1
      this.num3=this.currentnum+2
    }
  }


  ngOnInit(): void {
    
    this._SearchService.search.subscribe(data=>{
      this.newSearch= data;
     
      
    });


    this.movies(this.currentnum);
  }

 
  movies(num: number) {
    num = this.currentnum;
    localStorage.setItem("currentnum",this.currentnum.toString())
    this._AuthService.getmovie(num).subscribe({
      next: (data) => {
      
        this.moviesArr = data.results;
      },
    });
  }
  next() {
    if (this.currentnum == 1000) {
      this.movies(1000);
    } else {
      this.movies(++this.currentnum);
      this.num2++;
      this.num3++;
    }
  }
  prev() {
    if (this.currentnum == 1) {
      this.movies(1);
    } else {
      this.movies(--this.currentnum);
      this.num2--;
      this.num3--;
    }
  }
  num2Fun(){
  
    this.movies(++this.currentnum);
    localStorage.setItem("currentnum",this.currentnum.toString())
    this.num2++
    this.num3++
  }
  num3Fun(){
    this.movies(  this.currentnum+=2);
    localStorage.setItem("currentnum",this.currentnum.toString())
    this.num2+=2
    this.num3+=2
  }
}
