document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL TO INVITATION
  ========================= */

  const invitation = document.querySelector("#invitation");
  const scrollButton = document.querySelector(".js-scroll-invite");

  if (scrollButton && invitation) {
    scrollButton.addEventListener("click", () => {
      invitation.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }


  /* =========================
     REVEAL
  ========================= */

  const sections = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });


  /* =========================
     MUSIC
  ========================= */

  const music = document.querySelector("#backgroundMusic");
  const musicButton = document.querySelector("#musicButton");

  if (music && musicButton) {

    music.volume = 0.35;

    musicButton.addEventListener("click", async () => {

      if (music.paused) {

        try {

          await music.play();

          musicButton.classList.add("playing");

          musicButton.setAttribute(
            "aria-label",
            "Вимкнути музику"
          );

        } catch (error) {
          console.log("Не вдалося запустити музику:", error);
        }

      } else {

        music.pause();

        musicButton.classList.remove("playing");

        musicButton.setAttribute(
          "aria-label",
          "Увімкнути музику"
        );

      }

    });

  }

});