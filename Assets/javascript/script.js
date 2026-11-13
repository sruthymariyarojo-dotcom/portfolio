
document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to TechAura!");

    // Explore button animation
    const exploreBtn = document.querySelector(".hero-btn");

    if (exploreBtn) {

        exploreBtn.addEventListener("mouseenter", function () {
            exploreBtn.style.letterSpacing = "1px";
        });

        exploreBtn.addEventListener("mouseleave", function () {
            exploreBtn.style.letterSpacing = "0";
        });

    }

});
