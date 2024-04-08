const scripts = [
    "../sections/Navigation/navigation.js", 
    "../sections/Hero/hero.js",
    "../sections/Features/features.js",
    "../sections/Subscribe/subscribe.js",
    "../sections/Product/product.js",
    "../sections/Quality/quality.js",
    "../sections/Carousel/carousel.js",
    "../sections/Process/process.js",
    "../sections/Faq/faq.js",
];

for (index = 0; index < scripts.length; ++index) {
    let script = document.createElement('script');
    script.src = scripts[index];
    script.type='text/javascript';
    let done = false;
    script.onload = script.onreadystatechange = () => {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            console.log('ready state' + this.readyState);
            done = true;
        }
    };  
    document.getElementsByTagName("head")[0].appendChild(script);
}