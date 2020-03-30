import { Professor } from '../models/professor.model';
import { ProfessorService } from './professor.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private userBehaviorSubject: BehaviorSubject<Professor>;
  public userObservable: Observable<Professor>;

  constructor(private router:Router,
              private userService:ProfessorService) { 
              
    this.userBehaviorSubject = new BehaviorSubject<Professor>(JSON.parse(
      sessionStorage.getItem("user_login")
    ));
    this.userObservable = this.userBehaviorSubject.asObservable();
  }

  login(login:string, password:string){
    this.userService.recuperarPorLogin(login)
      .subscribe(
        (res:Professor[])=>{
          if(res.length>0){
            if(res[0].nome==password){
              sessionStorage.setItem("user_login",JSON.stringify(res[0]));
              this.userBehaviorSubject.next(res[0]);
              this.router.navigate(["list/professor.model"]);
            }else{
              console.log("Invalid password!"); 
              //this.toasty.error("Invalid password!") 
            }
          }else{
            console.log("Professor does not exist!");
            //this.toasty.error("Professor does not exist!") 
          }
        }
      );
  }

  logout(){
    sessionStorage.removeItem("user_login");
    this.userBehaviorSubject.next(null);
    this.router.navigate([""]);
  }

  getLoggedUser():Professor{
    let lu = JSON.parse(sessionStorage.getItem("user_login"));
    return lu;
  }
}
