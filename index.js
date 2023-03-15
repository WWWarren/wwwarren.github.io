function changeSlide(e) {
    const container = document.getElementById('container');
    const buttons = document.getElementById('buttons'); 

    // Update buttons
    for (let b of buttons.children) {
        b.classList.remove("active");
        e.classList.add("active");
    }

    // Update slides
    for (let c of container.children) {
      c.classList.remove("active");
      if (c.id === e.innerHTML) {
        c.classList.add("active");
      }
    }
}