import { Component } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  SwiperOptions,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.css'],
})
export class SwiperExampleComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: { delay: 1000 },
  };

  onSwiper(swiper: SwiperCore) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
