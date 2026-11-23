// One place for the store's contact details.
export const STORE_NAME = "Gifty's Store";
export const WHATSAPP_NUMBER = "2348140138396";
export const WHATSAPP_DISPLAY = "+234 814 013 8396";
export const INSTAGRAM_HANDLE = "GIFTSAM002";
export const INSTAGRAM_URL = "https://instagram.com/giftsam002";
export const TIKTOK_HANDLE = "giftsa8";
export const TIKTOK_URL = "https://www.tiktok.com/@giftsa8";
export const LOCATION = "Lekki, Lagos, Nigeria";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
