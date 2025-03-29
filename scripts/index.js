document.addEventListener("DOMContentLoaded", () => {
    // buttons
    const buttonStartExploringButton = document.getElementById("button-start-exploring-button");
    const footerStartExploringButton = document.getElementById("footer-start-exploring-button");
    const goNext1 = document.getElementById("go-next-1");
    const goNext2 = document.getElementById("go-next-2");
    const goNext3 = document.getElementById("go-next-3");
    const goNext4 = document.getElementById("go-next-4");
    const goNext5 = document.getElementById("go-next-5");
    const goNext6 = document.getElementById("go-next-6");
    const goNext7 = document.getElementById("go-next-7");

    // divs
    const pyramidOfGiza = document.getElementById("great-pyramid-of-giza");
    const lighthouseOfAlexandria = document.getElementById("lighthouse-of-alexandria");
    const mausoleumAtHalicarnassus = document.getElementById("mausoluem-at-halicarnassus");
    const colossusOfRhodes = document.getElementById("colossus-of-rhodes");
    const templeOfArtemis = document.getElementById("temple-of-artemis");
    const statusOfZeus = document.getElementById("statue-of-zeus");
    const hangingGarden = document.getElementById("hanging-garden");


    // onclick handlers
    buttonStartExploringButton.addEventListener("click", () => {
      pyramidOfGiza.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    footerStartExploringButton.addEventListener("click", () => {
      pyramidOfGiza.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    goNext1.addEventListener("click", () => {
        lighthouseOfAlexandria.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    })

    goNext2.addEventListener("click", () => {
      mausoleumAtHalicarnassus.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    goNext3.addEventListener("click", () => {
      colossusOfRhodes.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    goNext4.addEventListener("click", () => {
      templeOfArtemis.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    goNext5.addEventListener("click", () => {
      statusOfZeus.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    goNext6.addEventListener("click", () => {
      hangingGarden.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
})