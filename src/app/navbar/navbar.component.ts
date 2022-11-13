import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
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

  offset: number = 1
  display :any= false
  nav:any =false;
  name:string=""
  constructor(

    private router: Router,
    private _AuthService: AuthService,
    private _SearchService: SearchService
  ) { 
    if(localStorage.getItem("nav") != null ){
      
      var bar :any = localStorage.getItem("nav")
      this.nav= (/true/i).test(bar) 
    }
    if(localStorage.getItem("display") != null ){
      var dis :any = localStorage.getItem("display")
      this.display= (/true/i).test(dis) 
    }



    this.router.events.subscribe(e => {
    if (e instanceof NavigationStart) {
      this.name = e.url
      if (this.name == "/movies" ||this.name == "/tv" ||this.name == "/people"  ){

        this.nav = true
        localStorage.setItem("nav",this.nav)

      } else {
        this.nav = false
        localStorage.setItem("nav",this.nav)
      }
    }
  });
}




  sendSearch(e: any) {
    this.search = e.target.value;
    this._SearchService.changeSearch(this.search);
  }
  ngOnInit(): void {





    window.addEventListener('resize', () => {
      this.offset = window.innerWidth


      if (this.offset < 768) {
        this.display = true
        localStorage.setItem("display",this.display)
      } else {
        this.display = false
        localStorage.setItem("display",this.display)
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
