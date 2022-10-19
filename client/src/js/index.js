import  "./form";
import "./submit";
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Icon from '../images/icon-manifest.png'

// Import CSS modules
import  "./form";
import "./submit";

// Import CSS files
import "../css/index.css";

// Import Bootstrap & Popper
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
    document.getElementById('icon').src = Icon;
  });