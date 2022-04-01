import { SwiperExampleComponent } from './swiper-example.component';
import { render } from '@testing-library/angular';

describe('SwiperExampleComponent', () => {
  test('should render counter', async () => {
    const { findByText } = await render(SwiperExampleComponent);

    expect(findByText('Slide 1')).toBeTruthy();
    expect(findByText('Slide 2')).toBeTruthy();
    expect(findByText('Slide 3')).toBeTruthy();
  });
});
