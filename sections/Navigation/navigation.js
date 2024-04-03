const navigationPlaceholder = document.getElementById("navigation");

navigationPlaceholder.innerHTML = `
<div class='container'>
    <div class='navigation__container'>
        <ul class='navigation__list font-16'>
            <li><a href='#' class='navigation__list-item'>shop</a></li>
            <li><a href='#' class='navigation__list-item'>mission</a></li>
        </ul>
        <div class='navigation__mobile'>
            <img class='navigation__mobile-burger' alt='burger-icon' src='../../assets/burger.svg'/>
            <img class='navigation__mobile-close hide' alt='close-icon' src='../../assets/close.svg'/>
        </div>
        <div class='navigation__logo'>
            <p class='navigation__logo-text font-32'>LOGO</p>
        </div>
    </div>
    <div class='navigation__mobile-panel hide'>
        <ul class='navigation__mobile-list font-16'>
            <li><a href='#' class='navigation__mobile-list-item bold'>shop</a></li>
            <li><a href='#' class='navigation__mobile-list-item bold'>mission</a></li>
        </ul>
    </div>
</div>
`;

window.addEventListener("load", () => {
    const navBurger = document.querySelector(".navigation__mobile");
    const burgerIcon = document.querySelector(".navigation__mobile-burger");
    const closeIcon = document.querySelector(".navigation__mobile-close");
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
            setTimeout(() => {
            mobilePanel.style.transform = 'translateY(0px)';
            }, 100);
        } else {
            mobilePanel.style.transform = 'translateY(-100%)';
            setTimeout(() => {
            mobilePanel.classList.add("hide");
            }, 200);
        }
    }
});

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const mobilePanel = document.querySelector(".navigation__mobile-panel");
    const burgerIcon = document.querySelector(".navigation__mobile-burger");
    const closeIcon = document.querySelector(".navigation__mobile-close");
  
    if (windowWidth > 768) {
        if (burgerIcon.classList.contains("hide")) {
            mobilePanel.classList.add("hide");
            burgerIcon.classList.remove("hide");
            closeIcon.classList.add("hide");
        } else {
            return
        }
    }
})