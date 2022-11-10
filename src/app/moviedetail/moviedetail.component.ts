import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
id:string="";
movieobj:any;
imgSrc:string="https://image.tmdb.org/t/p/w500";

  constructor(private _AuthService:AuthService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id']

    this._AuthService.getMovieDetail(this.id).subscribe(
      {
        next:(data)=>{
          
          this.movieobj=data
        }
      })
  }

}
