import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer) {

  }


  enviar(){
    
    this.emailComposer.open({
      to: 'seperev@gmail.com',
      subject: 'enviado de prueba'
    });
/*
    this.emailComposer.isAvailable().then((available) =>{
        if(available) {
          console.log('a entrado', available);
          let email = {
            to: 'seperev@gmail.com',
            cc: null,
            bcc: null,
            attachments: null,
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
          };

        // Send a text message using default options
        this.emailComposer.open(email);
      }
    }).catch(() => { 
    console.log('EmailComposer.isAvailable error'); 
  });*/

  }
}
