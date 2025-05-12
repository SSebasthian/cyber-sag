import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, getApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideFirebaseApp(() => 
      initializeApp({ 
        projectId: "cyber-sag", 
        appId: "1:860011833534:web:095b25af7bd016a6e496ef", 
        storageBucket: "cyber-sag.firebasestorage.app", 
        apiKey: "AIzaSyCni7O4cZw6HIK_0tK2EXkmj665w5Kz7NU", 
        authDomain: "cyber-sag.firebaseapp.com", 
        messagingSenderId: "860011833534" 

      })
    ), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()), 
      provideStorage(() => getStorage())]
};
