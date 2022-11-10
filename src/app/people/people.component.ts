import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  currentnump: number = 1;
  num2p: number = this.currentnump + 1;
  num3p: number = this.currentnump + 2;
  peopleArr: any[] = [];
  vector:string="../../assets/1.jpg"
  newSearch:string="";
  constructor(private _AuthService: AuthService ,private _SearchService:SearchService) { 
     if(localStorage.getItem('currentnump') !=null){
    let x:any = localStorage.getItem("currentnump")
    this.currentnump= +x
    this.num2p=this.currentnump+1
    this.num3p=this.currentnump+2
  } }

  ngOnInit(): void {

    this._SearchService.search.subscribe(data=>{
      this.newSearch= data;
     
      
    });



    this.people(this.currentnump);
  }
  people(num: number) {
    num = this.currentnump;
    localStorage.setItem("currentnump",this.currentnump.toString())
    this._AuthService.getpeople(num).subscribe({
      next: (data) => {
        console.log(data.results);
        this.peopleArr = data.results;
      },
    });
  }
  next() {
    if (this.currentnump == 1000) {
      this.people(1000);
    } else {
      this.people(++this.currentnump);
      this.num2p++;
      this.num3p++;
    }
  }
  prev() {
    if (this.currentnump == 1) {
      this.people(1);
    } else {
      this.people(--this.currentnump);
      this.num2p--;
      this.num3p--;
    }
  }
  num2pFun(){
  
    this.people(++this.currentnump);
    localStorage.setItem("currentnump",this.currentnump.toString())
    this.num2p++
    this.num3p++
  }
  num3pFun(){
    this.people(  this.currentnump+=2);
    localStorage.setItem("currentnump",this.currentnump.toString())
    this.num2p+=2
    this.num3p+=2
  }
  }


