import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import player from 'lottie-web';
import { provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideLottieOptions({ player: () => player }),
    provideCacheableAnimationLoader(),
    provideHttpClient(withFetch()),
    provideRouter(routes)]
};
