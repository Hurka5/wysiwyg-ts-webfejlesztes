import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withHashLocation } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NewScriptComponent } from "./app/new-script/new-script.component";
import { ScriptsListComponent } from "./app/scripts-list/scripts-list.component";
import { ScriptDetailComponent } from "./app/script-detail/script-detail.component";
import { FormsModule } from "@angular/forms"; // Import FormsModule

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: "new", component: NewScriptComponent },
        { path: "scripts", component: ScriptsListComponent },
        { path: "scripts/:script_id", component: ScriptDetailComponent },
        { path: "", redirectTo: "/scripts", pathMatch: "full" },
      ],
      withHashLocation(), // Enable hash-based routing
    ),
    { provide: FormsModule },
  ],
});
