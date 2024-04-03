Project is made of html, scss, vanilla javascript.

index.html is the main file, where all sections html and js are imported via scripts.js in sections folder. It creates script tags for all sections in head tag of index.html. 

Project folders: assets, node_modules, sections, styles.

assets - .png and .svg are used for img tags. Where svg's need to be updated - they were added directly to html in sections.
node_modules - nothing much, just needed for scss.
sections - main folder, where every section has its html and js in one file and scss in other.
styles - main css file where scss is translated and scss file with imports from all other scss files. Also other classes, which are reused by more than one section. Mixins, variables, font styles, others.

In this project I tried to keep it as simple as possible with a bit of a twist where its not really component based and not everything-in-one-file, but something in between.

For design - tried to keep everything pixel perfect. Although there are few places where I had to update.
Also worth to note that for mobile design - I assumed that provided one is the minimal supported width.

---------------------------------------------------------------------------------------------------------------------------------
Project class tree:

Navigation:

navigation<br>
----container<br>
--------navigation__container<br>
------------navigation__list<br>
----------------navigation__list-item<br>
----------------navigation__list-item<br>
------------navigation__mobile<br>
----------------navigation__mobile-burger<br>
----------------navigation__mobile-close<br>
------------navigation__logo<br>
----------------navigation__logo-text<br>
--------navigation__mobile-panel<br>
------------navigation__mobile-list<br>
----------------navigation__mobile-list-item<br>
----------------navigation__mobile-list-item<br>

Hero:

hero<br>
----hero__container<br>
--------hero__image<br>
------------hero__image-desktop<br>
------------hero__image-tablet<br>
------------hero__image-mobile<br>
--------hero__heading<br>
------------hero__heading-text<br>
--------hero__cta<br>

Features:

features<br>
----container<br>
--------features__container<br>
------------features__card<br>
----------------features__card-icon<br>
----------------features__card-text<br>

Subscribe:

subscribe<br>
----container<br>
--------subscribe__container<br>
------------subscribe__heading<br>
------------subscribe__benefits<br>
----------------subscribe__benefits-card<br>
--------------------subscribe__benefits-card-icon<br>
--------------------subscribe__benefits-card-text<br>

Product:

product<br>
----container<br>
--------product__container<br>
------------product__heading<br>
------------product__benefits<br>
----------------product__benefits-card<br>
--------------------product__benefits-card-icon<br>
--------------------product__benefits-card-text<br>

Quality:

quality<br>
----container<br>
--------quality__container<br>
------------quality__image<br>
------------quality__image-mobile<br>
------------quality__text<br>

Carousel:

carousel<br>
----container<br>
--------carousel__container<br>
------------carousel__heading<br>
------------carousel__items<br>
----------------carousel__items-hidden<br>
--------------------carousel__card<br>
----------------------------carousel__card-title<br>
----------------------------carousel__card-text<br>
------------------------carousel__image-container<br>
----------------------------carousel__image-container-card<br>
--------------------------------carousel__image-container-card-icon<br>
--------------------------------carousel__image-container-card-text<br>
------------carousel__navigation<br>
----------------carousel__navigation-left<br>
----------------carousel__navigation-dots<br>
--------------------carousel__navigation-dot<br>
----------------carousel__navigation-right<br>
------------carousel__cta<br>

Process:

process<br>
----container<br>
--------process__container<br>
------------process__heading<br>
------------process__stepper<br>
----------------process__card<br>
--------------------process__card-wrapper<br>
------------------------process__card-mobile-icon<br>
------------------------process__card-title<br>
------------------------process__card-text<br>
------------------------process__card-text-mobile<br>
------------------------process__card-decoration<br>
----------------------------process__card-decoration-line<br>
----------------------------process__card-decoration-dot<br>
------------------------process__card-mobile-arrow<br>
----------------process__stepper-middle<br>
--------------------process__stepper-middle-dot<br>
--------------------process__stepper-middle-icon<br>

FAQ:

faq<br>
----container<br>
--------faq__container<br>
------------faq__heading<br>
------------faq__cards<br>
----------------faq__card<br>
--------------------faq__card-question<br>
------------------------faq__card-question-text<br>
------------------------faq__card-question-icon<br>
--------------------faq__card-answer<br>
