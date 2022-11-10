import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logerror:string="";
  
  loginform: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ])
  });
  constructor(private _AuthService:AuthService , private _Router:Router) { }
login(data:FormGroup){
  this._AuthService.signin(data.value).subscribe({
    next:(data)=>{console.log(data);
    
      if(data.message == "success")
      {
        localStorage.setItem("user", data.token)
        this._AuthService.userToken()
       this._Router.navigate(["/home"])
       
      }
      else if(data.message == "email doesn't exist"){
        this.logerror="email doesn't exist";
      }
      else{
        this.logerror="incorrect password"
      }
    }
  })
}
  ngOnInit(): void {
  }

}