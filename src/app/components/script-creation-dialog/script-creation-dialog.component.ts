import { Component, Inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-script-creation-dialog",
  imports: [
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: "./script-creation-dialog.component.html",
  styleUrl: "./script-creation-dialog.component.css",
})
export class ScriptCreationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
