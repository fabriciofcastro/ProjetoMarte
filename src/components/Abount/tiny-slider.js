import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

export const slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true
});