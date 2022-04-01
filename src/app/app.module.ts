import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperExampleComponent } from './swiper-example/swiper-example.component';

@NgModule({
  declarations: [AppComponent, SwiperExampleComponent],
  imports: [BrowserModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
