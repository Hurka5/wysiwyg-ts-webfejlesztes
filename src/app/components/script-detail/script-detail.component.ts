import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Script } from "../../models/script.model";
import { Feedback } from "../../models/feedback.model";
import { CommonModule } from "@angular/common";
import { Firestore, collection, doc, getDoc } from "@angular/fire/firestore";
import { Observable, map, Subject } from "rxjs";
import { scan } from "rxjs/operators";

@Component({
  selector: "app-script-detail",
  imports: [CommonModule],
  templateUrl: "./script-detail.component.html",
  styleUrl: "./script-detail.component.css",
})
export class ScriptDetailComponent {
  scriptId: string = "";
  script?: Script;
  private feedbacksSubject = new Subject<Feedback>();
  feedbacks$: Observable<Feedback[]>;

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
  ) {
    this.route.paramMap.subscribe((params) => {
      this.scriptId = params.get("id") ?? "";
    });

    this.feedbacks$ = this.feedbacksSubject.pipe(
      scan(
        (feedbacks: Feedback[], feedback: Feedback) => [...feedbacks, feedback],
        [],
      ),
    );
  }

  // add comment
  addComment() {
    let feedback = {
      id: "xyz",
      msg: "test",
      rating: 5,
    };
    // add feedback to array
    this.feedbacksSubject.next(feedback);
    console.log("ADDED", feedback);
    // TODO: add comment to firestore
  }

  ngOnInit() {
    const scriptCollection = collection(this.firestore, "scripts");
    const scriptDoc = doc(scriptCollection, this.scriptId);
    getDoc(scriptDoc).then((doc) => {
      if (doc.exists()) {
        this.script = doc.data() as Script;
      } else {
        console.log("No such document!");
      }
    });
  }
}
