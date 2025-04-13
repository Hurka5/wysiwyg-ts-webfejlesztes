import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "app-edit-code-dialog",
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule, MatFormFieldModule],
  templateUrl: "./edit-code-dialog.component.html",
  styleUrl: "./edit-code-dialog.component.css",
})
export class EditCodeDialogComponent {
  @Input() code: string = ""; // <-- RECEIVE code from parent
  @Output() close = new EventEmitter<string | null>(); // <-- SEND updated code back
  editableCode: string = "";

  ngOnInit() {
    this.editableCode = this.code;
  }

  save() {
    this.close.emit(this.editableCode);
  }

  cancel() {
    this.close.emit(null);
  }
}
