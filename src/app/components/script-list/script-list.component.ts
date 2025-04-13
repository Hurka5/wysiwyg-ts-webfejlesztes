import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Script } from "../../models/script.model";
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-script-list",
  imports: [CommonModule, MatButtonModule, MatListModule, MatCardModule],
  standalone: true,
  templateUrl: "./script-list.component.html",
  styleUrl: "./script-list.component.css",
})
export class ScriptListComponent implements OnInit {
  scripts$: Observable<Script[]>;

  constructor(private firestore: Firestore) {
    const scriptCollection = collection(firestore, "scripts");
    this.scripts$ = collectionData(scriptCollection) as Observable<Script[]>;
  }

  addScript() {
    const newScript: Script = {
      name: "asd",
      desc: "asd",
      data: "asd",
      editCode: Math.random().toString().slice(2),
    };
    addDoc(collection(this.firestore, "scripts"), newScript);
  }

  editScript(script: Script) {}

  deleteScript(script: Script): void {}

  ngOnInit(): void {}
}
