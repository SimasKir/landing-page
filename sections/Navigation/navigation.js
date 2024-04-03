const navContainer = document.getElementById("navigation");
navContainer.innerHTML = `
<div class='navigation__container container'>
  <ul class='navigation__list font-16'>
    <li><a href='#' class='navigation__list-item'>shop</a></li>
    <li><a href='#' class='navigation__list-item'>mission</a></li>
  </ul>
  <div class='navigation__mobile'>
    <img class='burger-icon' src='../../assets/burger.svg'/>
    <img class='close-icon hide' src='../../assets/close.svg'/>
  </div>
  <div class='navigation__logo'>
    <p class='navigation__logo-text font-32'>LOGO</p>
  </div>
  <div class='navigation__mobile-panel hide'>
    <ul class='navigation__mobile-list font-16'>
      <li><a href='#' class='navigation__mobile-list-item'>shop</a></li>
      <li><a href='#' class='navigation__mobile-list-item'>mission</a></li>
    </ul>
  </div>
</div>`;

window.addEventListener("load", () => {
  const navBurger = document.querySelector(".navigation__mobile");
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobilePanel = document.querySelector(".navigation__mobile-panel");
    
  navBurger && navBurger.addEventListener("click", () => {
    if (burgerIcon.classList.contains("hide")) {
      burgerIcon.classList.remove("hide");
      closeIcon.classList.add("hide");
      showMobilePanel();
    } else {
      burgerIcon.classList.add("hide");
      closeIcon.classList.remove("hide");
      showMobilePanel();
    }
  });

  const showMobilePanel = () => {
      if (mobilePanel.classList.contains("hide")) {
        mobilePanel.classList.remove("hide");
      } else {
        mobilePanel.classList.add("hide");
      }
  }
  
});

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  const mobilePanel = document.querySelector(".navigation__mobile-panel");
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (windowWidth > 768) {
    if (burgerIcon.classList.contains("hide")) {
      mobilePanel.classList.add("hide");
      console.log(windowWidth);
      burgerIcon.classList.remove("hide");
      closeIcon.classList.add("hide");
    } else {
      return
    }
  } 
})
