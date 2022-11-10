import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-tvdetail',
  templateUrl: './tvdetail.component.html',
  styleUrls: ['./tvdetail.component.scss']
})
export class TvdetailComponent implements OnInit {
  id:string="";
  tvobj:any;
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  
  constructor(private _AuthService:AuthService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void { 
    this.id=this._ActivatedRoute.snapshot.params['id']

  this._AuthService.getTvDetail(this.id).subscribe(
    {
      next:(data)=>{
        
        this.tvobj=data
      }
    })
  }

}
