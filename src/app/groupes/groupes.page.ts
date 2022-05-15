import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.page.html',
  styleUrls: ['./groupes.page.scss'],
})
export class GroupesPage implements OnInit {
group:any=[]
  constructor(private route:Router,private fire:AngularFirestore) { 
    this.getGroupe();
  }

  ngOnInit() {
  }
  getGroupe() {
    this.fire.collection("groupes").snapshotChanges().subscribe(
      (data) => {
        this.group = data.map(
          grp => {
            return {
              id: grp.payload.doc.id,
              nom: grp.payload.doc.data()["nom"],
            }
          }
        )
        console.log(this.group)
      }
    )
  }

  lien(grp){
    this.route.navigateByUrl("etudiants/"+JSON.stringify(grp.id))
  }


}
