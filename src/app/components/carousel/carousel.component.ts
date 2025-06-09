import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
carouselItems = [
  {
    title: 'Branding',
    image: '/assets/images/Content creation.jpg',
    description: 'Craft a compelling brand identity that resonates with your audience and sets you apart from the competition.'
  },
  {
    title: 'AI',
    image: 'assets/images/AI solutions.jpg',
    description: 'Leverage the power of artificial intelligence to streamline operations, enhance customer experience, and innovate faster.'
  },
  {
    title: 'Design',
    image: 'assets/images/Design.jpg',
    description: 'Transform ideas into stunning visuals with creative designs that speak your brand’s language.'
  },
  {
    title: 'Social Media Management',
    image: 'assets/images/SocialMediaManagement.jpg',
    description: 'Build your presence, engage your community, and grow your influence across all social platforms.'
  },
  {
    title: 'Marketing',
    image: 'assets/images/Digital Marketing.jpg',
    description: 'Drive targeted traffic, generate leads, and convert prospects with strategic digital marketing campaigns.'
  },
  {
    title: 'Advertising',
    image: 'assets/images/advertising.jpg',
    description: 'Reach your ideal customers with effective ad campaigns across digital and traditional platforms.'
  },
  {
    title: 'SEO',
    image: 'assets/images/SEO.jpg',
    description: 'Boost your search engine rankings, increase organic traffic, and get discovered by the right audience.'
  },
  {
    title: 'Content Creation',
    image: 'assets/images/Content creation.jpg',
    description: 'Produce high-quality content that educates, entertains, and converts your audience into loyal customers.'
  }
];


  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
    }, 3000); // every 3 seconds
  }
}
