import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  route = inject(Router);
  currentUrl: string = '';

  links = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact Us', route: '/contact' }
  ];

  ngOnInit() {
    // Listen to router events and update the current URL
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.urlAfterRedirects;
    });

    // Set initial URL in case user refreshes
    this.currentUrl = this.route.url;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  navigate(route: string) {
    this.route.navigateByUrl(route);
    this.closeMenu();
  }

  isActive(route: string): boolean {
    return this.currentUrl === route
  }
}
