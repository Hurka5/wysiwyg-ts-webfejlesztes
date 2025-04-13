import { Routes } from "@angular/router";
import { AddScriptComponent } from "./components/add-script/add-script.component";
import { ScriptListComponent } from "./components/script-list/script-list.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, title: "Home" },
  { path: "new", component: AddScriptComponent, title: "New script" },
  { path: "list", component: ScriptListComponent, title: "Script list" },
  {
    path: "script/:id",
    loadComponent: () =>
      import("./components/script-detail/script-detail.component").then(
        (m) => m.ScriptDetailComponent,
      ),
  },
];
