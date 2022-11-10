import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  currentnumt: number = 1;
  num2t: number = this.currentnumt + 1;
  num3t: number = this.currentnumt + 2;
  tvsArr: any[] = [];
  newSearch:string=""
  constructor(private _AuthService: AuthService ,private _SearchService:SearchService) { 
    if(localStorage.getItem('currentnumt') !=null){
      let x:any = localStorage.getItem("currentnumt")
      this.currentnumt= +x
      this.num2t=this.currentnumt+1
      this.num3t=this.currentnumt+2
    }
  }

  ngOnInit(): void { 
    this._SearchService.search.subscribe(data=>{
      this.newSearch= data;
     
      
    });
    
    
    this.tvs(this.currentnumt);
  }
  tvs(num: number) {
    num = this.currentnumt;
    localStorage.setItem("currentnumt",this.currentnumt.toString())
    this._AuthService.gettv(num).subscribe({
      next: (data) => {
        console.log(data.results);
        this.tvsArr = data.results;
      },
    });
  }
  next() {
    if (this.currentnumt == 1000) {
      this.tvs(1000);
    } else {
      this.tvs(++this.currentnumt);
      this.num2t++;
      this.num3t++;
    }
  }
  prev() {
    if (this.currentnumt == 1) {
      this.tvs(1);
    } else {
      this.tvs(--this.currentnumt);
      this.num2t--;
      this.num3t--;
    }
  }
  num2tFun(){
  
    this.tvs(++this.currentnumt);
    localStorage.setItem("currentnumt",this.currentnumt.toString())
    this.num2t++
    this.num3t++
  }
  num3tFun(){
    this.tvs(  this.currentnumt+=2);
    localStorage.setItem("currentnumt",this.currentnumt.toString())
    this.num2t+=2
    this.num3t+=2
  }
  }


