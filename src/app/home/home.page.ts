import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
email:string;
pass:string;
  constructor(private route:Router,private auth:AngularFireAuth,private toast:ToastController) {}
  connect(){
    this.auth.signInWithEmailAndPassword(this.email,this.pass)
              .then((data)=>{
                localStorage.setItem("etd",this.email)
                this.route.navigateByUrl("groupes");
              this.MaToast("Connecté")
              })
              .catch((err)=>{this.MaToast('Impossible de se connecter !Vérifier vos données')} )
              
  }
  async MaToast(message:string) {
    const toast = await this.toast.create({
    message: message,
    duration: 2000
    });
    toast.present();
    }

}
