import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';

import { AlertController, NavController } from '@ionic/angular';
import { throws } from 'assert';
import { runInThisContext } from 'vm';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  username = '';
  pages = {};
  constructor(public navCtrl: NavController,private authProvider:AuthService) { }
  ngOnInit() {
    
  }
  ionViewWillEnter(){
    if(this.authProvider.isAdmin()){
      this.pages = [
        {title : 'Admin Dashboard', page : 'AdminPage',icon:'home'},
        {title : 'Admin Second Page', page : 'AdminSecondPage',icon:'planet'}        
      ];
      this.openPage('AdminPage')
      
    }else{
      this.pages = [
        { title: 'Admin Dashboard', page: 'UserPage', icon: 'home' },
        { title: 'Admin Second Page', page: 'UserSecondPage', icon: 'planet' }        
      ];
      this.openPage('UserPage');
    }

  }
  openPage(page: string | any[] | UrlTree){
    this.navCtrl.navigateRoot(page)
  }
  logout(){
    this.authProvider.logout();
  }

  


}
