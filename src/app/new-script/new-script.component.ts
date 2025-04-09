import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material/form-field";
import { CodeEditorComponent } from "../code-editor/code-editor.component";

@Component({
  selector: "app-new-script",
  standalone: true,
  imports: [
    CodeEditorComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: "./new-script.component.html",
  styleUrl: "./new-script.component.css",
})
export class NewScriptComponent {
  scriptName: string = "Super Script";
}
