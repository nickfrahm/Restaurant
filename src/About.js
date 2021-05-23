import bbqStock from './images/bbq-stock.jpg';

export const About = () => {
  //parent about section
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");

  //bbq image
  const bbqImg = document.createElement("img");
  bbqImg.classList.add("img", "img__bbq");
  bbqImg.alt = "BBQ picture";
  bbqImg.src = bbqStock;
  aboutSection.appendChild(bbqImg);

  //about content container
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about__content");
  aboutSection.appendChild(aboutContent);

  //about header
  const aboutHeader = document.createElement("h2");
  aboutHeader.classList.add("about__header");
  aboutHeader.textContent = "Why Crunch's BBQ?";
  aboutContent.appendChild(aboutHeader);

  //about details
  const aboutDetails = document.createElement("p");
  aboutDetails.classList.add("about__details");
  aboutDetails.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quos voluptas maiores earum consequatur unde itaque illo aliquid veniam et consequuntur dolore, sunt error sint est ipsum, dolor excepturi ullam.";
  aboutContent.appendChild(aboutDetails);

  return aboutSection;
};

/*
        <section class="about">
            <img class="img img__bbq" src="../images/bbq-stock.jpg" alt="BBQ">
            <div class="about__content">
                <h2 class="about__header">Why Crunch's BBQ?</h2>
                <p class="about__details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quos voluptas maiores earum consequatur unde itaque illo aliquid veniam et consequuntur dolore, sunt error sint est ipsum, dolor excepturi ullam.</p>
            </div>
        </section>
*/
