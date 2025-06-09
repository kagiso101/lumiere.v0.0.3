import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { BannerComponent } from '../../components/banner/banner.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ClientsComponent } from '../../components/clients/clients.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent,
    BannerComponent,
    ContactFormComponent,
    ClientsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
