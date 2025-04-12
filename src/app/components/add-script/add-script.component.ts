import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import * as ts from "typescript";
import { ConsoleLog } from "../../models/console-log.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-add-script",
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    ReactiveFormsModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: "./add-script.component.html",
  styleUrl: "./add-script.component.css",
})
export class AddScriptComponent {
  @ViewChild("console", { static: true }) consoleRef!: ElementRef;

  outputs: ConsoleLog[] = [];

  name: string = "";
  desc: string = "";
  code: string = "";

  formdata: FormGroup;

  constructor() {
    this.formdata = new FormGroup({
      name: new FormControl("Super script name"),
      desc: new FormControl("This is a description..."),
      code: new FormControl("console.log('wtf');"),
    });
  }

  onSubmit() {}

  runScript() {
    // Clear the console
    this.outputs = [];

    // Get the script code
    this.code = this.formdata.get("code")?.value;

    // Compile the TS to JS
    let result = ts.transpile(this.code);

    // Save methods
    // TODO: Handle other console methods
    let originalLog = console.log;
    let originalError = console.error;

    // Switch out methods
    // TODO: Put this in another module (looks ugly)
    const c = this.consoleRef.nativeElement;
    console.log = (...data: any[]) => {
      this.outputs.push({
        msg: data.join(" "),
        type: "log",
      });
      c.scrollTop = c.scrollHeight;
    };
    console.error = (...data: any[]) => {
      this.outputs.push({
        msg: data.join(" "),
        type: "error",
      });
      c.scrollTop = c.scrollHeight;
    };

    // Run the code (indirectly so there are no errors XD)
    (function (result: string) {
      "use strict";
      var e: any = eval;
      try {
        e(result);
      } catch (err: any) {
        console.error(err);
      }
    })(result);

    // Restore methods
    console.log = originalLog;
    console.error = originalError;
  }
  ngOnInit() {
    console.log(this.consoleRef);
  }
}
