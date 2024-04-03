const carouselContainer = document.getElementById("carousel");

const carouselData = [
    {
        icons: [
            {
                icon: `../../assets/acai-berry.png`,
                text: 'organic acai berry'
            },
            {
                icon: '../../assets/acacia.png',
                text: 'organic acacia gum'
            },
            {
                icon: '../../assets/cinamon.png',
                text: 'organic ceylon cinnamon bark'
            },
            {
                icon: '../../assets/green-tea.png',
                text: 'organic green tea'
            },
        ],
        title: 'Metabolism Boosting',
        text: `
            <span>
                These powerful superfoods ignite your metabolism and reduce bloating. They improve digestion and deliver the energy you need to get things done.
            </span>
            <br><br>
            <span>
                Main Organic Ingiredents:
            </span>`,
    },
    {
        icons: [
            {
                icon: '../../assets/green-tea.png',
                text: 'organic green tea'
            },
            {
                icon: '../../assets/cinamon.png',
                text: 'organic ceylon cinnamon bark'
            },
            {
                icon: '../../assets/acacia.png',
                text: 'organic acacia gum'
            },
            {
                icon: `../../assets/acai-berry.png`,
                text: 'organic acai berry'
            },
        ],
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        icons: [
            {
                icon: `../../assets/acai-berry.png`,
                text: 'organic acai berry'
            },
            {
                icon: '../../assets/acacia.png',
                text: 'organic acacia gum'
            },
            {
                icon: '../../assets/cinamon.png',
                text: 'organic ceylon cinnamon bark'
            },
            {
                icon: '../../assets/green-tea.png',
                text: 'organic green tea'
            },
        ],
        title: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

carouselContainer.innerHTML = 
`<div class='container'>
    <div class='carousel__container'>
        <h2 class='carousel__heading font-50'><span class='font-red'>[product name]</span> blend</h2>
        <div class='carousel__items'>
            <div class='carousel__items-hidden'>
                ${carouselData.map((item) => {
                    return `
                    <div class='carousel__card'>
                        <div>
                            <h3 class='carousel__card-title font-22-bold'>${item.title}</h3>
                            <p class='carousel__card-text font-16-lighter'>${item.text}</p>
                        </div>
                        <div class='carousel__image-container'>
                            ${item.icons?.map((icon) => {
                                return `
                                <div class='carousel__image-container-card'>
                                    <img class='carousel__image-container-card-icon' src='${icon.icon}'/>
                                    <p class='carousel__image-container-card-text'>${icon.text}</p>
                                </div>`
                            }).join('')}
                        </div>
                    </div>`
                }).join('')}
            </div>
        </div>
        <div class='carousel__navigation'>
            <div class='carousel__navigation-left'>
                <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.16295 10.9407C1.50989 11.5267 1.50989 12.4782 2.16295 13.0642L10.5221 20.5642C11.1751 21.1501 12.2357 21.1501 12.8888 20.5642C13.5418 19.9782 13.5418 19.0267 12.8888 18.4407L5.71036 12.0001L12.8835 5.55947C13.5366 4.97353 13.5366 4.02197 12.8835 3.43604C12.2305 2.8501 11.1699 2.8501 10.5169 3.43604L2.15773 10.936L2.16295 10.9407Z" fill="#0B0A0C"/>
                </svg>
            </div>
            <div class='carousel__navigation-dots'>
                ${carouselData.map((item, index) => {
                    return `
                    <div class='carousel__navigation-dot dot-${index}'></div>`
                }).join('')}
            </div>
            <div class='carousel__navigation-right'>
                <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8371 10.9407C15.4901 11.5267 15.4901 12.4782 14.8371 13.0642L6.47792 20.5642C5.82486 21.1501 4.7643 21.1501 4.11124 20.5642C3.45818 19.9782 3.45818 19.0267 4.11124 18.4407L11.2896 12.0001L4.11646 5.55947C3.4634 4.97353 3.4634 4.02197 4.11646 3.43604C4.76952 2.8501 5.83008 2.8501 6.48314 3.43604L14.8423 10.936L14.8371 10.9407Z" fill="#0B0A0C"/>
                </svg>
            </div>
        </div>
        <div class='carousel__cta'>
            <a class='font-22' href='#'>add to cart</a>
        </div>
    </div>
</div>`;

window.addEventListener("load", () => {
    const carouselLeftArrow = document.querySelector('.carousel__navigation-left');
    const carouselRightArrow = document.querySelector('.carousel__navigation-right');
    const carouselLeftArrowPath = document.querySelector('.carousel__navigation-left path');
    const carouselRightArrowPath = document.querySelector('.carousel__navigation-right path');
    const carouselDots = document.querySelectorAll('.carousel__navigation-dot');

    let activeCard = 0;

    carouselDots[0].classList.add("navigation-dot-active");
    carouselLeftArrowPath.style.fill = '#bbbbbb';

    carouselLeftArrow.addEventListener("click", () => {
        if (activeCard === 0) {
            return;
        } else if ( activeCard < 2) {
            activeCard = activeCard - 1;
            removeDotsActive();
            setDotActive(activeCard);
            scrollCarousel(activeCard);
            carouselLeftArrowPath.style.fill = '#bbbbbb';
        } else {
            activeCard = activeCard - 1;
            removeDotsActive();
            setDotActive(activeCard);
            scrollCarousel(activeCard);
            carouselRightArrowPath.style.fill = '#0B0A0C';
        }
    });

    carouselRightArrow.addEventListener("click", () => {
        if (activeCard === carouselDots.length - 1) {
            return;
        } else if ( activeCard > 0 ) {
            activeCard = activeCard + 1;
            removeDotsActive();
            setDotActive(activeCard);
            scrollCarousel(activeCard);
            carouselRightArrowPath.style.fill = '#bbbbbb';
        }  else {
            activeCard = activeCard + 1;
            removeDotsActive();
            setDotActive(activeCard);
            scrollCarousel(activeCard);
            carouselLeftArrowPath.style.fill = '#0B0A0C';
        }
    });

    const removeDotsActive = () => {
        carouselDots.forEach((dot) => {
            if (dot.classList.contains("navigation-dot-active")) {
                dot.classList.remove("navigation-dot-active");
            } else {
                return;
            }
        })
    }

    const setDotActive = (index) => {
        carouselDots[index].classList.add("navigation-dot-active")
    }

    const scrollCarousel = (index) => {
        const carouselItems = document.querySelector('.carousel__items-hidden');
        carouselItems.style.transform = `translateX(${index * -100}%)`
    } 
  });