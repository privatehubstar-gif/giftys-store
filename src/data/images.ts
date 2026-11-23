/**
 * SITE IMAGES
 * -----------
 * Every spot on the website that needs a photo is listed here.
 * While a value is "" the site shows a neat placeholder that says what photo goes there.
 *
 * To add a photo:
 *   1. Put the file in the /public/images folder (e.g. public/images/hero.jpg)
 *   2. Put its path below (e.g. hero: "/images/hero.jpg")
 *
 * Product photos are set per product in src/data/products.ts (the `images` list).
 * Category photos are set in `categories` in the same file.
 */
export const siteImages = {
  // Homepage, large photo beside the main headline. Portrait 4:5, min 1200 x 1500.
  hero: "",
  // Homepage, "Our story" section. Portrait 4:5, min 1000 x 1250.
  homeStory: "",
  // Homepage, wide banner above the footer (optional). Landscape 16:9, min 1920 x 1080.
  banner: "",
  // About page, story photo. Portrait 4:5, min 1000 x 1250.
  aboutStory: "",
  // About page, "Meet the owner" round photo. Square or portrait, face near the top.
  aboutPortrait: "/images/owner-gift.jpg",
};
