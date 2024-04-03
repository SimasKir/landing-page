const heroContainer = document.getElementById("hero");
heroContainer.innerHTML = `
<div class='hero__container'>
    <div class='hero__image'>
        <img class='hero__image-desktop' src='../../assets/hero-desktop.png'/>
        <img class='hero__image-tablet' src='../../assets/hero-tablet.png'/>
        <img class='hero__image-mobile' src='../../assets/hero-mobile.png'/>
    </div>
    <div class='hero__heading'>
        <h1 class='hero__heading-text font-48'>
            New Year, New “You” with [product name]
        </h1>
    </div>
    <div class='hero__cta'>
        <a class='font-22' href='#'>try [product name]</a>
    </div>
</div>`;