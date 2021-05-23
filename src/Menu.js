import pulledPork from './images/pulled-pork-stock.jpg';
import brisket from './images/brisket-stock.webp';
import ribs from './images/ribs-stock.jpg';

export const Menu = () => {
  const menuContainer = document.createElement("section");
  menuContainer.classList.add("menu__container");

  const menuHeader = document.createElement("h1");
  menuHeader.classList.add("menu__header");
  menuHeader.textContent = "What's on the grill?";
  menuContainer.appendChild(menuHeader);

  const menuItems = document.createElement("div");
  menuItems.classList.add("menuItems");
  menuContainer.appendChild(menuItems);

  const foods = [
    {
      name: "Hawaiian Sliders",
      price: "$12",
      imgSrc: pulledPork
    },
    {
      name: "Crunch's Brisket",
      price: "$14",
      imgSrc: brisket
    },
    {
      name: "Classic Ribs",
      price: "$16",
      imgSrc: ribs
    }
  ];

  for (let i = 0; i < foods.length; i++) {
      const menuItem = document.createElement("div");
      menuItem.classList.add("item");

      const itemImg = document.createElement("img");
      itemImg.classList.add("menuImg");
      itemImg.src = foods[i].imgSrc;
      itemImg.alt = foods[i].name;
      menuItem.appendChild(itemImg);

      const info = document.createElement("div");
      info.classList.add("info");
      menuItem.appendChild(info);

      const foodName = document.createElement("h2");
      foodName.classList.add("foodName");
      foodName.textContent = foods[i].name;
      info.appendChild(foodName);

      const foodPrice = document.createElement("h2");
      foodPrice.classList.add("foodName");
      foodPrice.textContent = foods[i].price;
      info.appendChild(foodPrice);

      menuItems.appendChild(menuItem);
  }

  return menuContainer;

};

/*
div menu container
    menu header
    menu item container div * 3
        menu item div 
            image
            content div
                name
                price
close div
*/
