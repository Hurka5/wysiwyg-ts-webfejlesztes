import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-root",
  imports: [RouterModule, RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "wysiwyg-ts-webfejlesztes";
}
