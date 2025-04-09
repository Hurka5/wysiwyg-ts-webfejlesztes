import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";

import { provideHighlightOptions } from "ngx-highlightjs";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHighlightOptions({
      lineNumbersLoader: () => import("ngx-highlightjs/line-numbers"),
      coreLibraryLoader: () => import("highlight.js/lib/core"),
      languages: {
        typescript: () => import("highlight.js/lib/languages/typescript"),
      },
      themePath: "assets/styles/atom-one-dark.css", // Optional, useful for dynamic theme changes
    }),
  ],
};
