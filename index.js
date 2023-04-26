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

    // Add arrows to slider
        let arrows = document.getElementById('oi-slider');
        
        // Next arrow
        const nextArrow = elNew("button", {
            type: "button",
            className: "arrow-next",
            innerHTML: "<span><i class='arrow right'></i></span>",
            onclick: () => next(),
        });

        // Prev arrow
        const prevArrow = elNew("button", {
            type: "button",
            className: "arrow-prev",
            innerHTML: "<span><i class='arrow left'></i></span>",
            onclick: () => prev(),
        });

        arrows.append(prevArrow, nextArrow);

    // Animate slides when buttons are clicked
        let x = 0;
        const goto = (index) => {
            x = index;
            animateSlides(x);
        };

        const next = () => {
            if (x >= slideTotal) return;

            // Stop Autoplay
            clearInterval(itv);

            if (x === slideTotal - 1){
                x = 0
            } else {
                x = x + 1
            };
            animateSlides(x);
        }

        const prev = () => {
            if (x <= -1) return;

            // Stop Autoplay
            clearInterval(itv);

            if (x === 0){
                x = slideTotal - 1
            } else {
                x = x - 1
            };
            animateSlides(x);
        }

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
       let itv = setInterval(play, 6000);
}

function oiTabs(tabs) {
    const panels = tabs.querySelectorAll('.panel');
    console.log(panels);
    const titles = tabs.querySelector('.titles').children;
    console.log(titles);

    let x = 0;
    const changeNum = (index) => {
        x = index;
        animatePanel(x);
    };

    const animatePanel = (panel) => {
        // Remove active class off all panels + titles
        for (let i = 0; i < panels.length; i++) {
            panels[i].classList.remove("active");
            titles[i].classList.remove("active");
        }

        // Add active class onto active panel/title
        panels[panel].classList.add("active");
        titles[panel].classList.remove("active");
    }

    for (let i = 0; i < titles.length; i++) {
        titles[i].addEventListener("click", function() {
            changeNum(i);
        })
    }
}