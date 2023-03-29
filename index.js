function homepageBanner() {
    // DOM Helpers
    const elNew = (tag, prop) => Object.assign(document.createElement(tag), prop);

    // Find out how many slides there are
    const slides = document.getElementById('slides').children;
    const slideTotal = slides.length;
    
    // Add buttons to slider based on total slides
    let buttonContainer = document.getElementById('buttons');
    const buttons = []
    for (let i = 0; i < slideTotal; i++) {
        const button = elNew("button", {
            type: "button",
            onclick: () => goto(i)
        });
        if (i === 0) {
            button.classList.add("active");
        }
        buttons.push(button);
    }

    for (let i = 0; i < buttons.length; i++) {
        buttonContainer.appendChild(buttons[i]);
    }

    // Animate slides when buttons are clicked
    let x = 0;
    const goto = (index) => {
        x = index;
        animateSlides(x);
    };

    const animateSlides = (slide) => {
        // Remove active class off all slides + buttons
        for (let i = 0; i < slideTotal; i++) {
            slides[i].classList.remove("active");
            buttons[i].classList.remove("active");
        }

        // Add active class onto active slide/button
        slides[slide].classList.add("active");
        buttons[slide].classList.add("active");
    }

    // Autoplay slider
    const play = () => {
        if (x === slideTotal - 1){
            x = 0
        } else {
            x = x + 1
        };

        animateSlides(x);
    }

    // Start autoplay
    setInterval(play, 6000);
}