import {nav} from './Nav';
import {about} from './About';

const content = document.getElementById("content");
content.appendChild(nav());
content.appendChild(about());