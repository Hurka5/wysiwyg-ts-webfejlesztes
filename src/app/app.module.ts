import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { AddScriptComponent } from "./components/add-script/add-script.component";
import { ScriptListComponent } from "./components/script-list/script-list.component";

@NgModule({
  declarations: [AppComponent, AddScriptComponent, ScriptListComponent],
  imports: [BrowserModule, FormsModule, MatToolbarModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
