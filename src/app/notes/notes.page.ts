import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  etd:any;
  notes:any;

  constructor(private act:ActivatedRoute,private fire:AngularFirestore,private route:Router,private toast:ToastController) {
    this.etd=JSON.parse(this.act.snapshot.params["etd"]);
    this.getEtds();
    console.log(this.etd)
   }
   getEtds(){
     this.fire.collection("notes",ref=>ref.where("etudiants","==",this.etd))
  .snapshotChanges()
  .subscribe(
    (data)=>{
      this.notes=data.map(
       e =>{
         return{
           id:e.payload.doc.id,
           jee:e.payload.doc.data()["JEE"],
           php:e.payload.doc.data()["php"],
           ionic:e.payload.doc.data()["IONIC"],
           nom:e.payload.doc.data()["nom"],


         }
       } 
      )
      console.log(this.notes)
    }
  )
    }

  ngOnInit() {
  }

}
