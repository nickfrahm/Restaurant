import {Nav} from './Nav';
import {About} from './About';
import {Menu} from './Menu';

const content = document.getElementById("content");
content.appendChild(Nav());
content.appendChild(About());