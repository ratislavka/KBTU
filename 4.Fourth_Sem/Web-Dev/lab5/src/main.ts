import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

// Define routes with explicit type
const routes: Route[] = []; // Use Route[] for type safety

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // For routing
  ],
}).catch((err) => console.error(err));
