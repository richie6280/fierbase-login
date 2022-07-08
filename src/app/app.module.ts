import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoqtgF9N5s7IcZRWf_zlZTvd378YsQui4",
  authDomain: "fir-login-26d58.firebaseapp.com",
  projectId: "fir-login-26d58",
  storageBucket: "fir-login-26d58.appspot.com",
  messagingSenderId: "245277903752",
  appId: "1:245277903752:web:9478b6aa71e9215cbf883d",
  measurementId: "G-NJSW7BTFB0"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
