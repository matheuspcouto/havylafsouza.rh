/**
 * @Configuration appConfig
 *
 * File responsible for centralizing configurations and global providers for the Angular application.
 * Includes routes, animations, interceptors, Toastr, HttpClient, among others.
 *
 * @author Matheus Pimentel Do Couto
 * @created 10/07/2025
 * @updated 10/07/2025
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimizes change detection
    provideRouter(routes), // Application routes
    provideAnimations(), // Animations support
    provideToastr(), // Toast notifications
  ]
};
