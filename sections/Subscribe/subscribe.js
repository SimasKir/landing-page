const subscribeContainer = document.getElementById("subscribe");

const subscribeData = [
    {
        icon: '../../assets/cycle.svg',
        alt: 'cycle',
        text: 'delivery every 30 days',
    },
    {
        icon: '../../assets/percent.svg',
        alt: 'percent',
        text: 'best value per box',
    },
    {
        icon: '../../assets/x.svg',
        alt: 'close',
        text: 'no commitment, cancel anytime',
    },
]

subscribeContainer.innerHTML = 
`<div class='container'>
    <div class='subscribe__container'>
        <h2 class='subscribe__heading font-22-bold'>subscribe & save</h2>
        <div class='subscribe__benefits'>
            ${subscribeData.map((item, index) => {
                return `
                <div class='subscribe__benefits-card'>
                    <img class='subscribe__benefits-card-icon' src='${item.icon}' alt='${item.alt}' />
                    <p class='subscribe__benefits-card-text font-16-lighter subscribe-card-width-${index}'>${item.text}</p>
                </div>`
            }).join('')}
        </div>
    </div>
</div>`;