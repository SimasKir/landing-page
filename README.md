Project is made of html, scss, vanilla javascript.

index.html is the main file, where all sections html and js are imported via scripts.js in sections folder. It creates script tags for all sections in head tag of index.html. 

Project folders: assets, node_modules, sections, styles.

assets - .png and .svg are used for img tags. Where svg's need to be updated - they were added directly to html in sections.
node_modules - nothing much, just needed for scss.
sections - main folder, where every section has its html and js in one file and scss in other.
styles - other classes, which are reused by more than one section. Mixins, variables, font styles, others.

In this project I tried to keep it as simple as possible with a bit of a twist where its not really component based and not everything-in-one-file, but something in between.

For design - tried to keep everything pixel perfect. Although there are few places where I had to update.
Also worth to note that for mobile design - I assumed that provided one is the minimal supported width.

---------------------------------------------------------------------------------------------------------------------------------
Project class tree:

Navigation:

navigation
    container
        navigation__container
            navigation__list
                navigation__list-item
                navigation__list-item
            navigation__mobile
                navigation__mobile-burger
                navigation__mobile-close
            navigation__logo
                navigation__logo-text
        navigation__mobile-panel
            navigation__mobile-list
                navigation__mobile-list-item
                navigation__mobile-list-item

Hero:

hero
    hero__container
        hero__image
            hero__image-desktop
            hero__image-tablet
            hero__image-mobile
        hero__heading
            hero__heading-text
        hero__cta

Features:

features
    container
        features__container
            features__card
                features__card-icon
                features__card-text

Subscribe:

subscribe
    container
        subscribe__container
            subscribe__heading
            subscribe__benefits
                subscribe__benefits-card
                    subscribe__benefits-card-icon
                    subscribe__benefits-card-text

Product:

product
    container
        product__container
            product__heading
            product__benefits
                product__benefits-card
                    product__benefits-card-icon
                    product__benefits-card-text

Quality:

quality
    container
        quality__container
            quality__image
            quality__image-mobile
            quality__text

Carousel:

carousel
    container
        carousel__container
            carousel__heading
            carousel__items
                carousel__items-hidden
                    carousel__card
                            carousel__card-title
                            carousel__card-text
                        carousel__image-container
                            carousel__image-container-card
                                carousel__image-container-card-icon
                                carousel__image-container-card-text
            carousel__navigation
                carousel__navigation-left
                carousel__navigation-dots
                    carousel__navigation-dot
                carousel__navigation-right
            carousel__cta

Process:

process
    container
        process__container
            process__heading
            process__stepper
                process__card
                    process__card-wrapper
                        process__card-mobile-icon
                        process__card-title
                        process__card-text
                        process__card-text-mobile
                        process__card-decoration
                            process__card-decoration-line
                            process__card-decoration-dot
                        process__card-mobile-arrow
                process__stepper-middle
                    process__stepper-middle-dot
                    process__stepper-middle-icon

FAQ:

faq
    container
        faq__container
            faq__heading
            faq__cards
                faq__card
                    faq__card-question
                        faq__card-question-text
                        faq__card-question-icon
                    faq__card-answer
