import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const servicesCards = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Traveling doesn’t have to be expensive. We help you find the best deals, budget-friendly destinations, and money-saving tips so you can experience more while spending less. Smart planning means more adventures without breaking the bank!',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: "Discover breathtaking trails, from serene forest paths to rugged mountain peaks. Whether you're a beginner or an experienced hiker, the world is full of endless opportunities to explore nature, challenge yourself, and soak in stunning landscapes",
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Adventure doesn’t mean sacrificing comfort. From cozy stays to top-quality gear, we guide you to the best travel essentials, ensuring you enjoy every journey with ease and relaxation. Because a great adventure starts with great comfort!',
  },
]

export const toursCards = [
  {
    id: 1,
    image: img1,
    data: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: img2,
    data: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: 'kenya',
    duration: 20,
    price: 3300,
  },
  {
    id: 3,
    image: img3,
    data: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 4,
    image: img4,
    data: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    country: 'hong kong',
    duration: 8,
    price: 5000,
  },
]
