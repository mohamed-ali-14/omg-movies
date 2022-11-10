import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
search:any
  
  constructor(private _SearchService:SearchService) { }

  ngOnInit(): void { this._SearchService.search.subscribe(data=>{
    this.search = data;})
  
  
      
   
    

  }


}
