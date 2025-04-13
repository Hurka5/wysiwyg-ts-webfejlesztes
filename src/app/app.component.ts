import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "wysiwyg-ts-webfejlesztes";
}
