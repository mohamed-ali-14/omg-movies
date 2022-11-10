import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  islogin: boolean = false;
  search: any;

  offset:number=1
  display=false


  constructor(
    private _AuthService: AuthService,
    private _SearchService: SearchService
  ) {}

  sendSearch(e: any) {
    this.search = e.target.value;
    this._SearchService.changeSearch(this.search);
  }
  ngOnInit(): void {
    window.addEventListener('resize', () => {
     this.offset=window.innerWidth
     
     
     if(this.offset < 768){
      this.display=true
     }else{
      this.display=false
     }
    });

    this._AuthService.User.subscribe(() => {
      if (this._AuthService.User.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
  }
  logout() {
    this._AuthService.logout();
  }
}
