import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginWay: boolean = true;
  emailInput: boolean = false;

  constructor(public router: Router, public afAuth: AngularFireAuth, public afs: AngularFirestore,) { }

  ngOnInit(): void {
  }

  login(tpye: string) {
    this.loginWay = false;

    switch (tpye) {
      case 'email':
        this.emailInput = true;
        break;

      case 'phone':

        break;

      case 'facebook':

        break;

      case 'line':

        break;


    }
  }

  previousStep() {
    this.loginWay = true;
    this.emailInput = false;
  }

  // async email(value: string) {
  //   await this.loginGoogle(value).catch(err => {
  //     console.error(err);
  //   });

  //   // this.router.navigate(['member']);
  // }

  facebook() {
    this.router.navigate(['member']);
  }

  line() {
    this.router.navigate(['member']);
  }

  phone() {
    this.router.navigate(['member']);
  }


  loginGoogle(email: string) {
    var actionCodeSettings = {
      url: 'http://localhost:4200/login',
      // iOS: {
      //   bundleId: 'com.example.ios'
      // },
      // android: {
      //   packageName: 'com.example.android',
      //   installApp: true,
      //   minimumVersion: '12'
      // },
      handleCodeInApp: true
    };

    return this.afAuth.auth.sendSignInLinkToEmail(`${email}`, actionCodeSettings)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }  
}





