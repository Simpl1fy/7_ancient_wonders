document.addEventListener("DOMContentLoaded", () => {
  const sourceButton = document.getElementById("footer-source-text");
  const section = document.getElementById("source-content-section");

  console.log(sourceButton);
  console.log(section);

  sourceButton.addEventListener("click", () => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
