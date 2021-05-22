import {Nav} from './Nav';
import {About} from './About';
import {Menu} from './Menu';

//load Nav and About section on page load
const content = document.getElementById("content");
content.appendChild(Nav());
content.appendChild(About());

["about", "menu", "contact"].forEach((link) => {
    document.getElementById(link).addEventListener("click", () => {
        //clear #content
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        //append proper page to DOM
        if (link === "about") {
            content.appendChild(About());
        } else if (link === "menu") {
            content.appendChild(Menu());
        } else if (link === "contact") {
            content.appendChild(Contact());
        }
    })
})