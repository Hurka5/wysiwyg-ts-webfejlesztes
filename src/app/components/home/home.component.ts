import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { AsciiArt } from "../../models/ascii-art.model";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { SpacePipe } from "../../pipes/space.pipe";

@Component({
  selector: "app-home",
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SpacePipe,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  arts: AsciiArt[] = [];
  constructor() {
    this.arts = [
      new AsciiArt("ASCII Art 1", `(^_^) [o_o] (^.^)  (".") ($.$)`, 1, 30),
      new AsciiArt("ASCII Art 2", "# #\n\n###", 3, 3),
      new AsciiArt("ASCII Art 3", ">>------>", 1, 9),
    ];

    for (let art of this.arts) {
      //art.data = art.data.replace(/ /g, "‌‌");
    }
  }
}
