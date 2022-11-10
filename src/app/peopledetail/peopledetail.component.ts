import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-peopledetail',
  templateUrl: './peopledetail.component.html',
  styleUrls: ['./peopledetail.component.scss']
})
export class PeopledetailComponent implements OnInit {
  id:string="";
  peopleobj:any;
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  constructor(private _AuthService:AuthService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {this.id=this._ActivatedRoute.snapshot.params['id']

  this._AuthService.getPeopleDetail(this.id).subscribe(
    {
      next:(data)=>{
        
        this.peopleobj=data
      }
    })
  }

}
