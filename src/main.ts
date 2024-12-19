import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component'; // Importa el componente de login
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
platformBrowserDynamic()
  .bootstrapModule(LoginComponent, {
    providers: [
      { provide: HttpClientModule, useClass: HttpClientModule },
      { provide: RouterModule, useClass: RouterModule }
    ]
  })
  .catch(err => console.error(err));
