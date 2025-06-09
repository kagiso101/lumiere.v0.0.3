import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  baseSize = 400;
  minSize = 150;
  imageSize = this.baseSize;

  // Extra animation states
  imageOpacity = 1;
  imageScale = 1;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Resize logic
    let newSize = this.baseSize - scrollY * 0.5;
    newSize = Math.max(this.minSize, Math.min(this.baseSize, newSize));
    this.imageSize = newSize;

    // Opacity fades slightly between 1 and 0.7
    this.imageOpacity = Math.max(0.7, 1 - scrollY / 800);

    // Scale down image (between 1 and 0.8)
    this.imageScale = Math.max(0.8, 1 - scrollY / 1000);
  }
}
