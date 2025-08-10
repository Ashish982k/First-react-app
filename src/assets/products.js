import logo from './logo.png'
import keyboard from './keyboard.jpg'
import menu_icon from './menu_icon.svg'
import pc from './pc.jpg'
import pc1 from './pc1.jpg'
import keys from './key.jpg'
import intel from './i5.jpeg'
import rtx from './rtx5080.jpeg'
import mouse from './mouse.jpg'
import mousepad from './mousepad.jpg'
import back from './bg.jpg'
import cool from './cooler.jpg'


const obj = {
    logo,
    keyboard,
    menu_icon,
    pc,
    back
}

const ProductsData = [
  {
    name: "RAZER MOUSE",
    description: "High precision and responsiveness for competitive gaming.",
    img: mouse,
  },
  {
    name: "RAZER KEYBOARD",
    description: "Mechanical switches for a superior gaming experience.",
    img: keys,
  },
  {
    name: "INTEL CORE I5",
    description: "One of the best processor with 6 cores and 12 threads 2.4GHz.",
    img: intel,
  },
  {
    name: "RAZER MOUSEPAD",
    description: "Smooth surface for optimal tracking and precision control.",
    img: mousepad,
  },
  {
    name: "ACER MONITOR",
    description: "144Hz 4k 1440p Gaming Monitor.",
    img: pc1,
  },
];

export default obj;
export { ProductsData };