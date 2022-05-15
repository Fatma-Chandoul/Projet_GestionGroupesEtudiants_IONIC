import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhFrfLUTHA7-ADZdkqejnG_H4zwQnjwIo",
  authDomain: "appback2-7b039.firebaseapp.com",
  projectId: "appback2-7b039",
  storageBucket: "appback2-7b039.appspot.com",
  messagingSenderId: "310211278789",
  appId: "1:310211278789:web:1be4363e3878c55c757dac",
  measurementId: "G-V5P2NJG38M"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
