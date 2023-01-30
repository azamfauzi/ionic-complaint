import { Injectable } from '@angular/core';

export interface User {
  name: string;
  role: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser : User;
  constructor() { 
    this.currentUser = {
      name : '',
      role : 1000
    }
  }
  login(name: string , pw: string) : Promise<boolean> {
    return new Promise((resolve,reject) => {
       if( name === 'admin' && pw === 'admin'){
          this.currentUser = {
            name : name,
            role : 0             
          }
          resolve(true);
       }   


    });
  }
  isLoggedIn(){
    return this.currentUser != null;
  }
  logout(){
    this.currentUser = { name : "",role : 1000}
  }
  isAdmin(){
    return this.currentUser.role === 0;
  }


}
