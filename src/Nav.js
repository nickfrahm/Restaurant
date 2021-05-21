export const Nav = () => {
    //create nav parent element
    const navBar = document.createElement("nav");
    navBar.classList.add("navbar");

    //create navbar item container
    const navContainer = document.createElement("div");
    navContainer.classList.add("navbar__container");
    navBar.appendChild(navContainer);

    //create nav header
    const navHeader = document.createElement("h1");
    navHeader.classList.add("nav__header");
    navHeader.textContent = "Crunch's BBQ";
    navContainer.appendChild(navHeader);

    //create UL for navigation
    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav__links");
    navContainer.appendChild(navLinks);

    //link for about
    const about = document.createElement('li');
    about.classList.add("nav__link");
    about.id = "about";
    about.textContent = "About"
    navLinks.appendChild(about);

    //link for menu
    const menu = document.createElement('li');
    menu.classList.add("nav__link");
    menu.id = "menu";
    menu.textContent = "Menu"
    navLinks.appendChild(menu);
    
    //link for contact
    const contact = document.createElement('li');
    contact.classList.add("nav__link");
    contact.id = "contact";
    contact.textContent = "Contact"
    navLinks.appendChild(contact);

    return navBar;
}

/*
        <nav class="navbar">
            <div class="navbar__container">
                <h1 class="nav__header">Crunch's BBQ</h1>
                <ul class="nav__links">
                    <li id="about" class="nav__link">About</li>
                    <li id="menu" class="nav__link">Menu</li>
                    <li id="contact" class="nav__link">Contact</li>
                </ul>
            </div>
        </nav>
*/
