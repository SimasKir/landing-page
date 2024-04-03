const faqPlaceholder = document.getElementById("faq");

const faqData = [
    {
        question: "What are the Effective ingredients in [product name]?",
        answer: `
            <span>
                Pellentesque vitae convallis quam, in ultricies leo:
            </span>
            <br><br>
            <span class="bolder">
                Lorem ipsum dolor sit ame:
            </span>
            <br>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida sollicitudin diam, vestibulum placerat nisl finibus ut. Duis ac pulvinar justo. Aliquam mi nisl, gravida eget suscipit non, sodales in tortor. Nam purus sem, blandit non justo ac, ornare tempor quam. Morbi pharetra vehicula ornare. Proin gravida turpis orci, sit amet sollicitudin mi rutrum nec.
            </span>
            <br><br>
            <span class="bolder">
                Curabitur gravida ullamcorper dui:
            </span>
            <br>
            <span>
                Pellentesque - tincidunt efficitur suscipit. Aliquam commodo id est eu cursus. Mauris ut elit quis nunc eleifend egestas in ac lorem.
            </span>
            <br>
            <span>
                Pellentesque - vitae convallis quam, in ultricies leo. Curabitur gravida ullamcorper dui.
            </span>
            <br>
            <span>
                Aliquam velit arcu, ultrices nec mauris a, vehicula fermentum nisi.
            </span>
            <br>
            <span>
                Donec commodo - nisl at magna congue volutpat. Suspendisse sed nulla ultricies, elementum risus venenatis, eleifend sem. Vestibulum rutrum ut lectus id dignissim.
            </span>
            <br>
            <span>
                Curabitur eros diam - bibendum in ipsum ut, posuere suscipit magna. Maecenas at congue purus, vel facilisis odio. Praesent scelerisque, ipsum vel ultricies congue, odio turpis pharetra tellus, ac auctor orci tortor volutpat lectus. 
            </span>
            <br>
            <span> 
                Vestibulum tempor - ipsum et nibh mattis, sed volutpat dui bibendum.
            </span>`,
    },
    {
        question: "Other question?",
        answer: `
            <span>
                Pellentesque vitae convallis quam, in ultricies leo:
            </span>
            <br><br>
            <span class="bolder">
                Lorem ipsum dolor sit ame:
            </span>
            <br>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida sollicitudin diam, vestibulum placerat nisl finibus ut. Duis ac pulvinar justo. Aliquam mi nisl, gravida eget suscipit non, sodales in tortor. Nam purus sem, blandit non justo ac, ornare tempor quam. Morbi pharetra vehicula ornare. Proin gravida turpis orci, sit amet sollicitudin mi rutrum nec.
            </span>
            <br><br>
            <span class="bolder">
                Curabitur gravida ullamcorper dui:
            </span>
            <br>
            <span>
                Pellentesque - tincidunt efficitur suscipit. Aliquam commodo id est eu cursus. Mauris ut elit quis nunc eleifend egestas in ac lorem. 
                Pellentesque - vitae convallis quam, in ultricies leo. Curabitur gravida ullamcorper dui. Aliquam velit arcu, ultrices nec mauris a, vehicula fermentum nisi. 
                Donec commodo - nisl at magna congue volutpat. Suspendisse sed nulla ultricies, elementum risus venenatis, eleifend sem. Vestibulum rutrum ut lectus id dignissim.
                Curabitur eros diam - bibendum in ipsum ut, posuere suscipit magna. Maecenas at congue purus, vel facilisis odio. Praesent scelerisque, ipsum vel ultricies congue, odio turpis pharetra tellus, ac auctor orci tortor volutpat lectus. 
                Vestibulum tempor - ipsum et nibh mattis, sed volutpat dui bibendum.
            </span>`,
    },
    {
        question: "Other question?",
        answer: `
            <span>
                Pellentesque vitae convallis quam, in ultricies leo:
            </span>
            <br><br>
            <span class="bolder">
                Lorem ipsum dolor sit ame:
            </span>
            <br>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida sollicitudin diam, vestibulum placerat nisl finibus ut. Duis ac pulvinar justo. Aliquam mi nisl, gravida eget suscipit non, sodales in tortor. Nam purus sem, blandit non justo ac, ornare tempor quam. Morbi pharetra vehicula ornare. Proin gravida turpis orci, sit amet sollicitudin mi rutrum nec.
            </span>
            <br><br>
            <span class="bolder">
                Curabitur gravida ullamcorper dui:
            </span>
            <br>
            <span>
                Pellentesque - tincidunt efficitur suscipit. Aliquam commodo id est eu cursus. Mauris ut elit quis nunc eleifend egestas in ac lorem. 
                Pellentesque - vitae convallis quam, in ultricies leo. Curabitur gravida ullamcorper dui. Aliquam velit arcu, ultrices nec mauris a, vehicula fermentum nisi. 
                Donec commodo - nisl at magna congue volutpat. Suspendisse sed nulla ultricies, elementum risus venenatis, eleifend sem. Vestibulum rutrum ut lectus id dignissim.
                Curabitur eros diam - bibendum in ipsum ut, posuere suscipit magna. Maecenas at congue purus, vel facilisis odio. Praesent scelerisque, ipsum vel ultricies congue, odio turpis pharetra tellus, ac auctor orci tortor volutpat lectus. 
                Vestibulum tempor - ipsum et nibh mattis, sed volutpat dui bibendum.
            </span>`,
    },
    {
        question: "Other question?",
        answer: `
            <span>
                Pellentesque vitae convallis quam, in ultricies leo:
            </span>
            <br><br>
            <span class="bolder">
                Lorem ipsum dolor sit ame:
            </span>
            <br>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida sollicitudin diam, vestibulum placerat nisl finibus ut. Duis ac pulvinar justo. Aliquam mi nisl, gravida eget suscipit non, sodales in tortor. Nam purus sem, blandit non justo ac, ornare tempor quam. Morbi pharetra vehicula ornare. Proin gravida turpis orci, sit amet sollicitudin mi rutrum nec.
            </span>
            <br><br>
            <span class="bolder">
                Curabitur gravida ullamcorper dui:
            </span>
            <br>
            <span>
                Pellentesque - tincidunt efficitur suscipit. Aliquam commodo id est eu cursus. Mauris ut elit quis nunc eleifend egestas in ac lorem. 
                Pellentesque - vitae convallis quam, in ultricies leo. Curabitur gravida ullamcorper dui. Aliquam velit arcu, ultrices nec mauris a, vehicula fermentum nisi. 
                Donec commodo - nisl at magna congue volutpat. Suspendisse sed nulla ultricies, elementum risus venenatis, eleifend sem. Vestibulum rutrum ut lectus id dignissim.
                Curabitur eros diam - bibendum in ipsum ut, posuere suscipit magna. Maecenas at congue purus, vel facilisis odio. Praesent scelerisque, ipsum vel ultricies congue, odio turpis pharetra tellus, ac auctor orci tortor volutpat lectus. 
                Vestibulum tempor - ipsum et nibh mattis, sed volutpat dui bibendum.
            </span>`,
    },
]

faqPlaceholder.innerHTML = `
<div class='container'>
    <div class='faq__container'>
        <h2 class='faq__heading font-20'>FAQs</h2>
        <div class='faq__cards'>
            ${faqData.map((question) => {
                return `
                <div class='faq__card'>
                    <div class='faq__card-question'>
                        <p class='faq__card-question-text font-16 bold'>${question.question}</p>
                        <div class='faq__card-question-icon'>
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_289)">
                                <path d="M13.0594 2.44067C12.4734 1.85474 11.5219 1.85474 10.9359 2.44067L3.43593 9.94067C2.84999 10.5266 2.84999 11.4782 3.43593 12.0641C4.02187 12.65 4.97343 12.65 5.55937 12.0641L12 5.62349L18.4406 12.0594C19.0266 12.6454 19.9781 12.6454 20.5641 12.0594C21.15 11.4735 21.15 10.5219 20.5641 9.93599L13.0641 2.43599L13.0594 2.44067Z" fill="#0B0A0C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_289">
                                <rect width="15" height="24" fill="white" transform="translate(24 0.5) rotate(90)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div class='faq__card-answer hide'>${question.answer}</div>
                </div>`
            }).join('')}
        </div>
    </div>
</div>`;

window.addEventListener("load", () => {
    const faqAnswers = document.querySelectorAll('.faq__card-answer');
    const faqCards = document.querySelectorAll('.faq__card');
    const faqIcons = document.querySelectorAll('.faq__card-question-icon');

    faqAnswers[0].classList.remove("hide");
    faqIcons[0].style.transform = 'rotate(0)';
    faqAnswers[0].style.transform = 'translateY(0px)';

    faqCards.forEach((card, index) => {
        const cardIndex = index;
        card.addEventListener("click", () => {
            unhideAnswer(cardIndex);
        })
    })
      
    const addHiddenClass = () => {
        faqAnswers.forEach((answer) => {
            if (answer.classList.contains("hide")) {
                answer.style.transform = 'translateY(-120%)';
            } else {
                answer.classList.add("hide");
                answer.style.transform = 'translateY(-120%)';
            }
        })
        faqIcons.forEach((icon) => {
            icon.style.transform = 'rotate(180deg)';
        })
    }

    const unhideAnswer = (index) => {
        if (faqAnswers[index].classList.contains("hide")) {
            addHiddenClass();
            faqAnswers[index].classList.remove("hide");
            faqIcons[index].style.transform = 'rotate(0)';
            setTimeout(() => {
                faqAnswers[index].style.transform = 'translateY(0px)';
            }, 100);
        } else {
            faqAnswers[index].style.transform = 'translateY(0px)';
            faqIcons[index].style.transform = 'rotate(180deg)';
            setTimeout(() => {
                faqAnswers[index].classList.add("hide");
            }, 100);
        }
    }
  });