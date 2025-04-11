import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-scripts-list",
  imports: [CommonModule],
  templateUrl: "./scripts-list.component.html",
  styleUrl: "./scripts-list.component.css",
})
export class ScriptsListComponent {
  items = ["a", "b", "c"];
  addItem() {
    this.items.push("NEW ITEM");
  }
  test() {
    alert("MEOW");
  }
}
