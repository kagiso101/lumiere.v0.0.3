import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
clients = [
    { name: 'Client A', logo: '/assets/images/aztech-1.png' },
    { name: 'Client B', logo: '/assets/images/client-2.png' },]
}
