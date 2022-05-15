import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.page.html',
  styleUrls: ['./etudiants.page.scss'],
})
export class EtudiantsPage implements OnInit {
etds:any=[];
grp:any;
  constructor(private fire:AngularFirestore,private route:Router ,private act:ActivatedRoute,private toast:ToastController) {
    
    this.grp=JSON.parse(this.act.snapshot.params["grp"]);
    this.getEtds();
    console.log(this.grp)
   }
  getEtds() {
    this.fire.collection("etudiants",ref =>ref.where("groupes","==",this.grp))
    .snapshotChanges()
    .subscribe(
(data)=>{
  this.etds=data.map(
    e=>{
      return{
        id:e.payload.doc.id,
        nom:e.payload.doc.data()["nom"],
        prenom:e.payload.doc.data()["prenom"],
      }
    }
  )

        console.log(this.etds)
      }
    )
    ;
  }

  ngOnInit() {
  }
  notes(etd){
    this.route.navigateByUrl("notes/"+JSON.stringify(etd.id))
  }

}
