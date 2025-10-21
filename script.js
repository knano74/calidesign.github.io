

    const scrollBtn = document.getElementById("scrollBtn");
    const arrowIcon = document.getElementById("arrowIcon");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;

    // When user reaches bottom
    if (scrollTop + innerHeight >= scrollHeight - 10) {
      arrowIcon.classList.remove("down");
      arrowIcon.classList.add("up");
      scrollBtn.title = "Back to Top";
    } 
    // When near top
    else {
      arrowIcon.classList.remove("up");
      arrowIcon.classList.add("down");
      scrollBtn.title = "Scroll to Bottom";
    }
  });

  scrollBtn.addEventListener("click", () => {
    if (arrowIcon.classList.contains("down")) {
      // Scroll to bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    } else {
      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });