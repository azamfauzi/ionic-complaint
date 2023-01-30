import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '.././auth.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navCtrl:NavController, private authProvider: AuthService,private alertCtrl : AlertController

  ) { }
  user = {
    name : 'admin',
    pw : 'admin'
  }
  ngOnInit() {
  }
  loginUser(){
    this.authProvider.login(this.user.name,this.user.pw).then(success=>{
      if(success){
        this.navCtrl.navigateRoot('menu');
        
      }
    }).catch(
      err => {
        this.alertCtrl.create({
          header : 'Login Failed',
          message : 'Please check your credentials',
          buttons: ['ok']
        });
        

        
      }
    )
  }

}
