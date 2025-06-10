import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'services',
    component: ServicePageComponent
  }, {
    path: 'about',
    component: AboutUsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  },
];
