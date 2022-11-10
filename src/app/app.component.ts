import { Component } from '@angular/core';

import { ActivatedRoute, NavigationStart, Router } from '@angular/router';


ActivatedRoute
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noxe';
  nav:any;
  name:string=""
 
  windowScrolled = false;
  constructor(private _ActivatedRoute:ActivatedRoute , private router:Router ){
    
    
  }

    ngOnInit() {
     window.addEventListener('scroll', () => {
       if(window.pageYOffset == 0){
        this.windowScrolled=false

      }else{
        this.windowScrolled=true
      }});
      

      this.router.events.subscribe(e => {
         if (e instanceof NavigationStart) {
           this.name=e.url
           if(this.name =="/main" )
    {
      
      this.nav=false

    }else{
      this.nav=true
    }
         }
       });

   }
   scrollToTop(): void {
    window.scrollTo(0, 0);
    this.windowScrolled = false;
  }
    
   
  
  }



