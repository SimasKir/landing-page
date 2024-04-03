const featuresPlaceholder = document.getElementById("features");

const featuresData = [
    {
        icon: 
            `<svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9361 0C11.4334 0 0.5 10.7464 0.5 24C0.5 37.2536 11.4334 48 24.9361 48C31.5618 48 37.5642 45.4071 41.9703 41.2071C42.517 40.6821 42.6591 39.8679 42.3093 39.2036C41.9594 38.5393 41.205 38.1643 40.4506 38.2929C39.3791 38.475 38.2858 38.5714 37.1596 38.5714C26.5652 38.5714 17.9716 30.1286 17.9716 19.7143C17.9716 12.6643 21.9076 6.525 27.7351 3.28929C28.402 2.91429 28.7409 2.16429 28.5769 1.43571C28.4129 0.707143 27.7788 0.160714 27.0135 0.0964287C26.3247 0.0428573 25.6359 0.0107141 24.9361 0.0107141V0Z" fill="#0B0A0C"/>
            </svg>`
        ,
        text: 'Improves sleep',
        minContent: ' width-min',
    },
    {
        icon: 
            `<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3846 0.27337C23.9804 0.0942655 23.5474 0 23.0951 0C22.6428 0 22.2098 0.0942655 21.8056 0.27337L3.68563 7.80518C1.56858 8.68185 -0.00957917 10.7274 4.37699e-05 13.1972C0.0481585 22.5483 3.97432 39.6575 20.5546 47.4344C22.1617 48.1885 24.0285 48.1885 25.6355 47.4344C42.2159 39.6575 46.142 22.5483 46.1901 13.1972C46.1998 10.7274 44.6216 8.68185 42.5046 7.80518L24.3846 0.27337ZM12.3174 20.861C12.3174 17.6748 14.9541 15.0825 18.2163 15.0825C19.7752 15.0825 21.2764 15.6952 22.383 16.7698L23.0951 17.4674L23.8072 16.7698C24.9138 15.6858 26.415 15.0825 27.9739 15.0825C31.2265 15.0825 33.8728 17.6654 33.8728 20.861C33.8728 22.3881 33.2473 23.8586 32.1503 24.9427L24.1921 32.7384C23.5955 33.3229 22.6139 33.3229 22.0173 32.7384L14.0592 24.9427C12.9525 23.8586 12.3366 22.3881 12.3366 20.861H12.3174Z" fill="#0B0A0C"/>
            </svg>`
        ,
        text: 'Boosts immune system',
        minContent: '',
    },
    {
        icon: 
            `<svg width="37" height="48" viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1904 0C16.8498 0 18.1904 1.34062 18.1904 3V13.5H12.1904V3C12.1904 1.34062 13.5311 0 15.1904 0ZM3.19043 6C3.19043 4.34062 4.53105 3 6.19043 3C7.8498 3 9.19043 4.34062 9.19043 6V13.5H3.19043V6ZM21.1904 6C21.1904 4.34062 22.5311 3 24.1904 3C25.8498 3 27.1904 4.34062 27.1904 6V15C27.1904 16.6594 25.8498 18 24.1904 18C22.5311 18 21.1904 16.6594 21.1904 15V6ZM30.1904 12C30.1904 10.3406 31.5311 9 33.1904 9C34.8498 9 36.1904 10.3406 36.1904 12V18C36.1904 19.6594 34.8498 21 33.1904 21C31.5311 21 30.1904 19.6594 30.1904 18V12ZM21.1904 20.25V20.1937C22.0717 20.7 23.0936 21 24.1904 21C25.4279 21 26.5717 20.625 27.5279 19.9875C28.3436 22.3219 30.5748 24 33.1904 24C34.2873 24 35.3092 23.7094 36.1904 23.1937V24C36.1904 28.9031 33.8373 33.2625 30.1904 36V45C30.1904 46.6594 28.8498 48 27.1904 48H12.1904C10.5311 48 9.19043 46.6594 9.19043 45V37.65C7.56855 36.9094 6.07793 35.8875 4.79355 34.6031L3.70605 33.5156C1.45605 31.2656 0.19043 28.2094 0.19043 25.0312V22.5C0.19043 19.1906 2.88105 16.5 6.19043 16.5H14.4404C16.5123 16.5 18.1904 18.1781 18.1904 20.25C18.1904 22.3219 16.5123 24 14.4404 24H9.19043C8.36543 24 7.69043 24.675 7.69043 25.5C7.69043 26.325 8.36543 27 9.19043 27H14.4404C18.1717 27 21.1904 23.9813 21.1904 20.25Z" fill="#0B0A0C"/>
            </svg>`
        ,
        text: 'Enhances strength',
        minContent: ' width-min',
    },
    {
        icon: 
            `<svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4028 47.1526V43.5422C19.4028 40.2386 22.0809 37.5605 25.3846 37.5605H31.8817C32.2316 37.5605 32.5175 37.2757 32.5185 36.9258L32.5191 36.7384C32.5196 36.5647 32.4564 36.3941 32.3338 36.2708C32.2135 36.1499 32.0531 36.0832 31.8825 36.0832H13.2134C9.90976 36.0832 7.23169 33.4051 7.23169 30.1015V29.8981C7.23169 26.5944 9.90976 23.9163 13.2134 23.9163H38.0039C38.3556 23.9163 38.6407 23.6313 38.6407 23.2795V23.173C38.6407 22.8212 38.3556 22.5362 38.0039 22.5362H16.025C14.4377 22.5362 12.9425 21.921 11.8149 20.804C10.6872 19.687 10.0582 18.1977 10.0432 16.6105L10.0427 16.5435C10.0277 14.9354 10.6427 13.4205 11.7749 12.2779C12.9068 11.1353 14.4161 10.506 16.0244 10.506H32.2663C32.6162 10.506 32.9021 10.2212 32.9031 9.87128V9.81843C32.9037 9.65829 32.8503 9.50082 32.7441 9.38098C32.6213 9.24246 32.45 9.16559 32.2666 9.16559H27.8521C24.5484 9.16559 21.8703 6.48752 21.8703 3.18384V0.846605C21.8703 0.378997 22.2493 0 22.7169 0H26.3689C26.8365 0 27.2155 0.378997 27.2155 0.846605V3.18358C27.2155 3.53535 27.5006 3.8204 27.8523 3.8204H32.2669C33.868 3.8204 35.3725 4.44494 36.5031 5.57873C37.6337 6.71252 38.2537 8.2189 38.2489 9.82003V9.83498C38.2441 11.4294 37.6259 12.9689 36.4988 14.0968C35.3688 15.2279 33.8653 15.8509 32.2669 15.8509H16.0412C15.8667 15.8509 15.6956 15.9149 15.5726 16.0391C15.4519 16.1608 15.386 16.3222 15.3876 16.4936L15.3881 16.5606C15.3913 16.9075 15.6777 17.1913 16.0247 17.1913H38.0177C41.3137 17.1913 43.9856 19.8632 43.9856 23.1591V23.2798C43.9856 26.5835 41.3075 29.2615 38.0039 29.2615H13.2134C12.8617 29.2615 12.5766 29.5466 12.5766 29.8983V30.1017C12.5766 30.4535 12.8617 30.7385 13.2134 30.7385H31.8302C33.4343 30.7385 34.9836 31.3594 36.1166 32.4947C37.2485 33.6288 37.8693 35.1362 37.8645 36.7384L37.864 36.9424C37.8592 38.5405 37.2317 40.0419 36.0977 41.1684C34.9663 42.2924 33.4249 42.9062 31.8299 42.9062H25.3851C25.0333 42.9062 24.7483 43.1913 24.7483 43.543V47.1534C24.7483 47.621 24.3693 48 23.9017 48H20.2497C19.7821 48 19.4031 47.621 19.4031 47.1534L19.4028 47.1526Z" fill="#0B0A0C"/>
                <path d="M45.1295 18.8085L45.1177 18.7909C44.7993 18.3065 44.9336 17.6558 45.418 17.3374L47.601 15.9017C48.0854 15.5833 48.7361 15.7176 49.0545 16.202L49.0663 16.2196C49.3847 16.704 49.2504 17.3547 48.766 17.6731L46.583 19.1088C46.0986 19.4272 45.4479 19.293 45.1295 18.8085Z" fill="#0B0A0C"/>
                <path d="M49.0549 30.6948L49.0666 30.6772C49.385 30.1927 49.2508 29.542 48.7664 29.2236L46.5834 27.788C46.099 27.4696 45.4483 27.6038 45.1298 28.0882L45.1181 28.1058C44.7997 28.5903 44.9339 29.241 45.4184 29.5594L47.6013 30.995C48.0858 31.3134 48.7365 31.1792 49.0549 30.6948Z" fill="#0B0A0C"/>
                <path d="M50.2684 22.4395H47.656C47.0763 22.4395 46.6063 22.9094 46.6063 23.4892V23.51C46.6063 24.0897 47.0763 24.5597 47.656 24.5597H50.2684C50.8482 24.5597 51.3181 24.0897 51.3181 23.51V23.4892C51.3181 22.9094 50.8482 22.4395 50.2684 22.4395Z" fill="#0B0A0C"/>
                <path d="M2.31475 22.9296L2.32634 22.912C2.64457 22.4281 3.29589 22.2935 3.7798 22.6118L5.96275 24.0473C6.44666 24.3656 6.58141 25.017 6.26303 25.5012L6.25144 25.5188C5.93321 26.0027 5.28189 26.1372 4.79798 25.819L2.61503 24.3834C2.13112 24.0652 1.99637 23.4137 2.31475 22.9296Z" fill="#0B0A0C"/>
                <path d="M2.61552 35.933L4.79847 34.4974C5.28238 34.1792 5.93392 34.3136 6.2523 34.7977L6.26389 34.8153C6.58212 35.2992 6.44774 35.9508 5.96361 36.2692L3.78066 37.7047C3.29675 38.023 2.64521 37.8886 2.32683 37.4044L2.31524 37.3868C1.99701 36.9029 2.13139 36.2514 2.61552 35.933Z" fill="#0B0A0C"/>
                <path d="M3.72487 29.1504H1.11246C0.532718 29.1504 0.0627441 29.6204 0.0627441 30.2001V30.2209C0.0627441 30.8007 0.532718 31.2706 1.11246 31.2706H3.72487C4.30461 31.2706 4.77459 30.8007 4.77459 30.2209V30.2001C4.77459 29.6204 4.30461 29.1504 3.72487 29.1504Z" fill="#0B0A0C"/>
            </svg>`
        ,
        text: 'Improves digestion',
        minContent: ' width-min',
    },
]

featuresPlaceholder.innerHTML = `
<div class='container'>
    <div class='features__container'>
        ${featuresData.map((feature) => {
            return `
            <div class='features__card'>
                <div class='features__card-icon'>${feature.icon}</div>
                <p class='features__card-text font-16${feature?.minContent}'>${feature.text}</p>
            </div>`
        }).join('')}
    </div>
</div>`;
