import { Routes } from "@angular/router";
import { AddScriptComponent } from "./components/add-script/add-script.component";
import { ScriptListComponent } from "./components/script-list/script-list.component";

export const routes: Routes = [
  { path: "new", component: AddScriptComponent, title: "New script" },
  { path: "list", component: ScriptListComponent, title: "Script list" },
];
