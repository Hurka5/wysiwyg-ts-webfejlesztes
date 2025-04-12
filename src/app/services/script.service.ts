import { Injectable } from "@angular/core";
import { Script } from "../models/script.model";
import { Firestore, collectionData, collection } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class ScriptService {
  constructor() {
    console.log("ScriptService initialized");
  }
}
