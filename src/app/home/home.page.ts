import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

   constructor(private iab: InAppBrowser) {
   }
   openblank(){
     this.iab.create('https://butlers.cafe24.com/', '_blank');
   }

  // constructor(private iab: InAppBrowser, public platform: Platform){
  //   platform.ready().then(() => {
  //     let browser = this.iab.create('https://butlers.cafe24.com/', '_blank', {zoom:'no', location:'no'})

  //     browser.show();
  //   })
  // }

}
