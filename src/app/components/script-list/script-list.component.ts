import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Script } from "../../models/script.model";
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  deleteDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { EditCodeDialogComponent } from "../edit-code-dialog/edit-code-dialog.component";

@Component({
  selector: "app-script-list",
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    EditCodeDialogComponent,
  ],
  standalone: true,
  templateUrl: "./script-list.component.html",
  styleUrl: "./script-list.component.css",
})
export class ScriptListComponent implements OnInit {
  scripts$: Observable<Script[]>;
  editCode = "<edit code here>";
  showDialog = false;

  handleDialogClose(updatedCode: any | null) {
    if (updatedCode !== null) {
      this.editCode = updatedCode as string;
    }
    this.showDialog = false;
  }

  constructor(private firestore: Firestore) {
    const scriptCollection = collection(firestore, "scripts");
    this.scripts$ = collectionData(scriptCollection) as Observable<Script[]>;
  }

  addScript() {
    const newScript: Script = {
      name: "lololo",
      desc: "asd",
      data: "asd",
      editCode: Math.random().toString().slice(2),
    };

    // add script to firestore and get the generated id and update the script with the id
    addDoc(collection(this.firestore, "scripts"), newScript).then((docRef) => {
      const scriptDoc = doc(this.firestore, "scripts", docRef.id);
      setDoc(scriptDoc, { id: docRef.id }, { merge: true });
    });
  }

  clearScripts() {
    const scriptCollection = collection(this.firestore, "scripts");
    getDocs(scriptCollection).then((scriptSnapshot) => {
      scriptSnapshot.forEach((scriptDoc) => {
        deleteDoc(doc(this.firestore, "scripts", scriptDoc.id));
      });
    });
  }

  viewScript(script: Script) {
    /* redirect to /script/id */
    window.location.href = `/script/${script.id}`;
  }

  editScript(script: Script) {
    this.showDialog = true;
  }

  deleteScript(script: Script): void {
    this.showDialog = true;
    // wait until show dialog is false
    setTimeout(() => {
      if (!this.showDialog) {
        const scriptCollection = collection(this.firestore, "scripts");
        const scriptDoc = doc(scriptCollection, this.editCode);
        deleteDoc(scriptDoc);
      }
    }, 1000);
  }

  ngOnInit(): void {}
}
