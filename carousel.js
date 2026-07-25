(function () {
    var carousel = document.getElementById("projectCarousel");
    if (!carousel) {
        return;
    }

    var slides = carousel.querySelectorAll(".carousel-slide");
    var dotsContainer = document.getElementById("carouselDots");
    var prevBtn = document.getElementById("carouselPrev");
    var nextBtn = document.getElementById("carouselNext");
    var current = 0;
    var timer = null;

    if (!slides.length) {
        return;
    }

    slides.forEach(function (_, i) {
        var dot = document.createElement("span");
        dot.className = "carousel-dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", function () {
            goTo(i);
            resetTimer();
        });
        dotsContainer.appendChild(dot);
    });

    var dots = dotsContainer.querySelectorAll(".carousel-dot");

    function update() {
        slides.forEach(function (slide, i) {
            slide.classList.toggle("active", i === current);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle("active", i === current);
        });
    }

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        update();
    }

    function next() {
        goTo(current + 1);
    }

    function prev() {
        goTo(current - 1);
    }

    function resetTimer() {
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(next, 4000);
    }

    prevBtn.addEventListener("click", function () {
        prev();
        resetTimer();
    });

    nextBtn.addEventListener("click", function () {
        next();
        resetTimer();
    });

    update();
    resetTimer();
})();
