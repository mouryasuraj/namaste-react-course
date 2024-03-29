// CDN URL for restaurant IMage
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


// LOGO Image URL
export const LOGO_URL = "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg";

// SwiggyResAPI
export const swiggyResAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0512616&lng=72.9368399&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"


// SwiggyResMenuAPI
export const swiggyResMenuAPI = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0512616&lng=72.9368399&restaurantId='

// 631368


// MenuListImgURL
export const menuListImgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"


// Nth Prime Number
export function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    console.log("Prime Number called");
    return num - 1;
}