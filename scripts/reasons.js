document.addEventListener("DOMContentLoaded", () => {
    const reasonsButton = document.getElementById("footer-reasons-text");
    const section = document.getElementById("reasons-section");

    reasonsButton.addEventListener("click", () => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    })
})